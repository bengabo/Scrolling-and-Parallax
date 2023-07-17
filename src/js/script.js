let meetTheMonsters = document.querySelector("#meet");
let navbar = document.querySelector(".site-nav");
let sticky = navbar.offsetTop;
let navHeight = navbar.scrollHeight;

const moveHeader = () => {
  let mainOnTop = meetTheMonsters.getBoundingClientRect().top - navHeight;
  mainOnTop < 0
    ? navbar.classList.add("in-body")
    : navbar.classList.remove("in-body");
  window.requestAnimationFrame(moveHeader);
};

window.requestAnimationFrame(moveHeader);

// window.addEventListener("scroll", function () {
//   // Check if the user has scrolled past the navbar
//   if (window.scrollY >= sticky) {
//     navbar.classList.add("in-body");
//   } else {
//     navbar.classList.remove("in-body");
//   }
// });

// const moveHeader = () => {
//   let mainOnTop = meetTheMonsters.getBoundingClientRect().top - navHeight;
//   console.log(mainOnTop);
//   mainOnTop < 0
//     ? nav.classList.add("in-body")
//     : nav.classList.remove("in-body");
//   window.requestAnimationFrame(moveHeader);
// };

// window.requestAnimationFrame(moveHeader);
