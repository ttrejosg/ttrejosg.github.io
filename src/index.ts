const btnProjects = document.querySelectorAll(".btn-images");
const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".close-btn");
const imageName = document.querySelector(".image-name");
const largeImage = document.querySelector(".large-image");
const imageIndex = document.querySelector(".index");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let index = 0;
let project_name = "";
let dataLength = 0;

const togglePopup = () => {
  if (popup) popup.classList.toggle("active");
};

const setupEventListeners = () => {
  btnProjects.forEach((item) => {
    item.addEventListener("click", () => {
      project_name = (item as HTMLElement).dataset.name_project || "";
      dataLength = parseInt((item as HTMLElement).dataset.length || "0");
      updateImage(1);
      togglePopup();
    });
  });

  closeBtn?.addEventListener("click", togglePopup);

  leftArrow?.addEventListener("click", () => navigateImage(-1));
  rightArrow?.addEventListener("click", () => navigateImage(1));
};

const navigateImage = (direction: number) => {
  const newIndex = index + direction;

  if (
    newIndex > 0 &&
    newIndex <= dataLength &&
    largeImage &&
    imageName &&
    imageIndex
  ) {
    largeImage.classList.add("img-transition");
    imageName.classList.add("img-transition");
    imageIndex.classList.add("img-transition");

    setTimeout(() => {
      updateImage(newIndex);
    }, 500);
  }
};

const updateImage = (i: number) => {
  const imagePath = `/images/${project_name}/${i}.png`;

  if (largeImage && imageName && imageIndex) {
    (largeImage as HTMLImageElement).src = imagePath;
    imageName.innerHTML = imagePath.slice(8);
    imageIndex.innerHTML = `0${i}`;

    setTimeout(() => {
      largeImage.classList.remove("img-transition");
      imageName.classList.remove("img-transition");
      imageIndex.classList.remove("img-transition");
    }, 200);
    index = i;
  }
};

setupEventListeners();
