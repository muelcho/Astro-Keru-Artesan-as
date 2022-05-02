/*MENU*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navTogle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
