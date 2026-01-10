// código sacado de https://www.youtube.com/watch?v=Ovl3IxTwS18&list=PLpKIuQ0huAsKy_VUPRKKSYqQmXKesrkeb&index=2
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
let menuOpen = false;
hamburger.addEventListener("click", () => {
    if (menuOpen == false) {
        navLinks.style.display = "block";
        menuOpen = true;
    } else if (menuOpen == true) {
        navLinks.style.display = "none";
        menuOpen = false;
    }
);