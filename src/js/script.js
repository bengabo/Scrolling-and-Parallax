let meetTheMonsters = document.querySelector("#meet");
let navbar = document.querySelector(".site-nav");
let navHeight = navbar.scrollHeight;
let headerContent = document.querySelector(".header-content");
let headerCue = document.querySelector(".header-cue");
let headerCueHeight = headerCue.scrollHeight;

const moveHeader = () => {
  let mainOnTop = meetTheMonsters.getBoundingClientRect().top - navHeight;

  mainOnTop < 0
    ? navbar.classList.add("in-body")
    : navbar.classList.remove("in-body");

  let currentCuePosition = headerContent.getBoundingClientRect().top;
  console.log(currentCuePosition);
  currentCuePosition < -300
    ? headerCue.classList.add("d-none")
    : headerCue.classList.remove("d-none");

  window.requestAnimationFrame(moveHeader);
};

window.requestAnimationFrame(moveHeader);
