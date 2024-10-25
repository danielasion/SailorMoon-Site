document.addEventListener("DOMContentLoaded", function () {
  const navMenu = document.getElementById("mymenu");
  navMenu.style.display = "none";
});

const closeMenu = document.getElementById("close-menu-button");
closeMenu.style.display = "none";

function openView() {
  const navMenu = document.getElementById("mymenu");
  const closeMenu = document.getElementById("close-menu-button");
  const openMenu = document.getElementById("menu-button");
  navMenu.style.display = "flex";
  closeMenu.style.display = "block";
  openMenu.style.display = "none";
}

function closeView() {
  const navMenu = document.getElementById("mymenu");
  const openMenu = document.getElementById("menu-button");
  const closeMenu = document.getElementById("close-menu-button");
  navMenu.style.display = "none";
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
}
document.getElementById("menu-button").addEventListener("click", openView);
closeMenu.addEventListener("click", closeView);

function flipImage(element) {
  element.classList.toggle("flipped");
}
