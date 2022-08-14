let nav = document.querySelector(".navigation");
let header = document.querySelector(".page-body__header");
let button = document.querySelector(".logo-burger__button");

header.classList.add("page-body__header--height");
nav.classList.add("navigation--show");
button.classList.add("logo-burger__button--open");

button.addEventListener("click", function () {
  nav.classList.toggle("navigation--show");
  button.classList.toggle("logo-burger__button--close");
});
