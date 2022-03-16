
// MENU ON MOBILE
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

//shows menu when user clicks
burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});
//close hamburger menu when a link is clicked
const navLink = document.querySelectorAll(".nav-link");
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);
/////////////////////////////////////////



//SCROLL TO TOP functionality
  const scrollUp = document.querySelector("#scroll-up");
  scrollUp.addEventListener("click", () => {
    window.scrollTo({top: 0,
                     left: 0,
                     behavior: "smooth",
                   });
                });
/////////////////////////////////////////