const menuToggle = document.querySelector("#input");
const navbar = document.querySelector(" nav ul");

menuToggle.addEventListener("click", function () {
  navbar.classList.toggle("slide");
});
