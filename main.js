// e.target.dataset.name_project
// item.dataset.name_project

const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".close-btn");
const imageName = document.querySelector(".image-name");
const largeImage = document.querySelector(".large-image");
const imageIndex = document.querySelector(".index");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

const btnProjects = document.querySelectorAll(".btn-images");

let index = 0;
let project_name = "";
let length = 0;

btnProjects.forEach((item, i) => {
  item.addEventListener("click", () => {
    project_name = item.dataset.name_project;
    length = parseInt(item.dataset.length);
    updateImage(1);
    popup.classList.toggle("active");
  });
});

const updateImage = (i) => {
  let path = `static/${project_name}/${i}.png`;
  largeImage.src = path;
  imageName.innerHTML = path;
  imageIndex.innerHTML = `0${i}`;
  largeImage.classList.remove("img-transition");
  imageName.classList.remove("img-transition");
  imageIndex.classList.remove("img-transition");
  index = i;
};

closeBtn.addEventListener("click", () => {
  popup.classList.toggle("active");
});

leftArrow.addEventListener("click", () => {
  if (index > 1) {
    largeImage.classList.add("img-transition");
    imageName.classList.add("img-transition");
    imageIndex.classList.add("img-transition");
    setTimeout(() => {
      updateImage(index - 1);
    }, 300);
  }
});

rightArrow.addEventListener("click", () => {
  if (index < length) {
    largeImage.classList.add("img-transition");
    imageName.classList.add("img-transition");
    imageIndex.classList.add("img-transition");
    setTimeout(() => {
      updateImage(index + 1);
    }, 300);
  }
});
