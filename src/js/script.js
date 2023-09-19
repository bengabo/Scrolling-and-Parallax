let meetTheMonsters = document.querySelector("#meet");
let navbar = document.querySelector(".site-nav");
let navHeight = navbar.scrollHeight;
let headerContent = document.querySelector(".header-content");
let headerCue = document.querySelector(".header-cue");
let headerCueHeight = headerCue.scrollHeight;
let headerTitle = document.querySelector(".header-title");
let headerSubtitle = document.querySelector(".header-subtitle");

const moveHeader = () => {
  let top = window.scrollY;
  let mainOnTop = meetTheMonsters.getBoundingClientRect().top - navHeight;

  mainOnTop < 0
    ? navbar.classList.add("in-body")
    : navbar.classList.remove("in-body");

  let currentCuePosition = headerContent.getBoundingClientRect().top;
  console.log(currentCuePosition);
  currentCuePosition < -300
    ? headerCue.classList.add("d-none")
    : headerCue.classList.remove("d-none");

    headerContent.style.transform = `translateY(-${top / 2}px)`;

  window.requestAnimationFrame(moveHeader);
};

window.requestAnimationFrame(moveHeader);
