const menuToggle = document.querySelector("#input");
const navbar = document.querySelector(" nav ul");
const nav = document.querySelector(" nav ");

menuToggle.addEventListener("click", function () {
  navbar.classList.toggle("slide");
  nav.classList.toggle("nav");
});
