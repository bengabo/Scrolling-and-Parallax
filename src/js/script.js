// $(function () {
//   let meetTheMonsters = document.querySelector("#meet");

//   const moveHeader = () => {
//     console.log(`${meetTheMonsters.getBoundingClientRect().top}`);
//     window.requestAnimationFrame(moveHeader);
//   };

//   window.requestAnimationFrame(moveHeader);
// });

// let nav = document.querySelector(".site-nav");
// let meetTheMonsters = document.querySelector("#meet");
// let navHeight = nav.scrollHeight;

// const moveHeader = () => {
//   let mainOnTop = meetTheMonsters.getBoundingClientRect().top - navHeight;
//   console.log(mainOnTop);
//   mainOnTop < 0
//     ? nav.classList.add("in-body")
//     : nav.classList.remove("in-body");
//   window.requestAnimationFrame(moveHeader);
// };

// window.requestAnimationFrame(moveHeader);
