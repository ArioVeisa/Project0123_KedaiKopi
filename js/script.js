// toggle
const navbarNav = document.querySelector(".navbar-nav");
const menu = document.querySelector("#hamburger-menu");
// onclick

menu.addEventListener("click", () => {
  navbarNav.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
