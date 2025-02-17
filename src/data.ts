import NextJS from "./icons/NextJS.astro";
import Tailwind from "./icons/Tailwind.astro";
import Express from "./icons/Express.astro";
import MongoDB from "./icons/MongoDB.astro";
import Laravel from "./icons/Laravel.astro";
import Mysql from "./icons/Mysql.astro";
import Vue from "./icons/Vue.astro";
import CPP from "./icons/CPP.astro";
import Python from "./icons/Python.astro";
import Java from "./icons/Java.astro";
import NodeJS from "./icons/NodeJS.astro";

export const socialIcons = [
  {
    href: "https://co.linkedin.com/in/ttrejosg",
    title: "linkedin-in",
    size: "2xl",
  },
  {
    href: "https://www.instagram.com/ttrejosg/",
    title: "instagram",
    size: "2xl",
  },
  {
    href: "https://github.com/ttrejosg",
    title: "github",
    size: "2xl",
  },
];

export const navItems = [
  { id: "home", href: "#home", title: "Home", position: "left" },
  { id: "about", href: "#about", title: "About", position: "left" },
  { id: "resume", href: "#resume", title: "Resume", position: "right" },
  { id: "projects", href: "#projects", title: "Projects", position: "right" },
];

export const workExperince = [
  {
    icon: "graduation-cap",
    title: "Assistant Lecture",
    subtitle: '"Universidad Autónoma de Manizales"',
    date: "January 2022 - Present",
    description: `• Physics I (First semester 2022).
    • Artificial Intelligence (Second semester 2022).
    • Fundamentals of Object-Oriented Programming (From the first semester 2023).

    In charge of supporting the students' process throughout the course by conducting individual and/or group sessions during the semester in order to provide advice on the topics covered in class, with the aim of providing academic support, solving problems and clarifying doubts for students.
    `,
  },
  {
    icon: "code",
    title: "Software Engineer",
    subtitle: '"Universidad Autónoma de Manizales"',
    date: "February 2024 - August 2024",
    description: `I worked as a software developer for a scalable REST API using Laravel.

    • Database and REST API design.
    • Development of a REST API, including sending emails, handling excel/csv files and authentication of a SPA with CSRF protection.
    • Implementation of a user manual on the website.
`,
  },
];

export const education = [
  {
    icon: "graduation-cap",
    title: "Systems Engineering",
    subtitle: '"Universidad Autónoma de Manizales"',
    date: "August 2021 - Present",
    description: `Focus on software development with high quality standards, adapted to the most current trends.`,
  },
  {
    icon: "shield",
    title: "Ciber student",
    subtitle: "Cyberbit",
    date: "December 2023",
    description: `Basic course on cybersecurity aimed at improving understanding of cybersecurity, understanding emerging threats, the contemporary cybersecurity environment, and common methods and attacks carried out by malicious actors.`,
  },
  {
    icon: "school",
    title: "Bachelor",
    subtitle: '"Colegio Mayor de Nuestra Señora"',
    date: "January 2010 - November 2020",
    description: `Basic knowledge about different areas of knowledge, such as mathematics, physics, chemistry, biology, social sciences, among others.`,
  },
];

export const projects = [
  {
    nameProject: "UCSPY",
    date: "Nov, 2024 - Dic, 2024",
    uniqueRepo: "https://github.com/Th3C0deWizard/UCSPy",
    technologyStack: [Python],
    content: `This project involves the development of an artificial intelligence model for the purpose of automatically scheduling course schedules given at an educational institution. To achieve this, a constraint satisfaction model and the 'Local Search' technique were used, and the results were evaluated for the potential use of this model in a production environment. For more details, see the analysis published on github (In Spanish)
    `,
    numImages: 9,
  },
  {
    nameProject: "Certificate_Events",
    date: "Feb, 2024 - Aug, 2024",
    technologyStack: [Vue, Laravel, Mysql],
    content: `The web platform developed aims to <span>>generate and send certificates for events of any kind<span>, taking into account the management of event participants.
      
      I worked as a software developer for a scalable REST API using Laravel.

    • Database and REST API <span>>design<span>.
    • Development of a REST API, including sending emails, handling excel/csv files and authentication of a SPA with CSRF protection.
    • Implementation of a user manual on the website.
    `,
    numImages: 8,
  },
  {
    nameProject: "Burning_Pages",
    frontRepo: "https://github.com/JustTwoDevs/BurningPagesClient.git",
    backRepo: "https://github.com/JustTwoDevs/BurningPages.git",
    date: "Nov, 2024 - Dec, 2024",
    technologyStack: [Vue, Laravel, Mysql],
    content: `
      This web application allows users to <span>>rate and review books and book series<span>, rate these reviews, verify themselves as literary critics and also be able to see all the information about: books, book authors and book series. In addition, users are classified according to the total difference in likes and dislikes of their reviews.
      This page is inspired by <span>>“Rotten Tomatoes”<span> but instead of being about the film industry, it is about the literary industry.
    `,
    numImages: 1,
  },
  {
    nameProject: "Marvel_Guest_Who",
    frontRepo: "https://github.com/Th3C0deWizard/marvel-guest-who.git",
    backRepo: "https://github.com/Th3C0deWizard/marvel-guest-who-server.git",
    date: "Apr, 2024",
    technologyStack: [Vue, NodeJS],
    content: `
      Marvel guess who is an <span>>online multiplayer guess who game about marvel characters, comics, games and movies characters<span> are included in the game.
      The game is played by two players, each player selects a character and the other <span>>player has to guess the character by asking questions about the character<span>. For this we provide information about the character to help the player guess the character, like an image, description, comics, series and events the character appeared in.
      Each player has a board with all the characters for that game (25), the player can eliminate characters from the board based on the answers to the questions. Also the player have a chat to communicate with the other player. <span>>The player who guesses the character first wins the game<span>, try to guess the character with the least amount of questions and enjoy the game!
    `,
    numImages: 7,
  },
  {
    nameProject: "Project_Sort",
    uniqueRepo: "https://github.com/ttrejosg/project-sort",
    date: "Feb 2024",
    technologyStack: [CPP, Python],
    content: `
      This is a project to <span>>analyze the execution time<span> and number of instructions of two sorting algorithms. The algorithms chosen were: <span>>HeapSort and Quicksort<span>, both implemented recursively. The implementation was taken directly from Geeksforgeeks. For this, each of the algorithms was executed with different sizes (100 to 100,000,000) and the measurement of execution time and number of instructions was taken.
      As for the code, the process of executing the algorithms was automated 10 times and with a certain number of data <span>>(With C++)<span>, so that at the end an email was sent with the number of instructions and the execution time of each of the iterations <span>>(With Python)<span>. For more details, see the analysis published on github (In Spanish).
    `,
    numImages: 8,
  },
  {
    nameProject: "Code_Beaters",
    frontRepo: "https://github.com/JustTwoDevs/belicoders",
    backRepo: "https://github.com/JustTwoDevs/belicoders_REST_API",
    date: "Sep, 2023 - Dec, 2023",
    technologyStack: [NextJS, Tailwind, Express, MongoDB],
    content: `
      CodeBeaters is a project focused on <span>>solving algorithmic and SQL problems<span>, where each one is called "Rival", and a set of these is called "Contest". Users can create their own problems or solve published ones.
      <span>>The goal is to complement the education and professional growth of aspiring software developers<span> or professions related to the areas of computer science, serving as a tool for institutions dedicated to education in the field of computer science.
      It should be noted that this is the first module of the app. The next module will be focused on creating virtual classrooms aimed at computer science students.
    `,
    numImages: 5,
  },
  {
    nameProject: "Calvin_Parabox",
    uniqueRepo: "https://github.com/ttrejosg/Calvinx_Parabox",
    date: "Oct 2022",
    technologyStack: [Java],
    content: `
      Calvin Parabox is a project made in Java that consists of a <span>>replica of a video game called "Patrick\'s Parabox"<span>. This replica has some modifications.
      The player is a square that must go through different levels solving puzzles, to do so he must move blocks to indicated positions and then position himself where indicated. Additionally, in some levels <span>>the player will have an enemy that will move automatically<span> and will be able to move the blocks and collide with the player, making them lose.
      The project has a small number of levels implemented but not all of those that were planned, in addition to being carried out in Java it is a bit heavy.
    `,
    numImages: 4,
  },
];
