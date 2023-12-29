const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});

function changeIcon() {
  if (navLinks.classList.contains("mobile-menu")) {
    menu.style.backgroundImage = "assets/images/icon-menu-close.svg";
  }
}

changeIcon();
