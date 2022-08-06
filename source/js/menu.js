let header = document.querySelector(".main-header");
let button = document.querySelector(".logo-burger__button");

header.classList.add("page-body__header--show");
button.classList.add("logo-burger__button--open");

button.addEventListener("click", function () {
  header.classList.toggle("page-body__header--show");
  button.classList.toggle("logo-burger__button--close");
});
