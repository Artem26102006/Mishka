let map = document.querySelector(".map__image-block");
let iframe = document.querySelector("iframe");
let button = document.querySelector(".navigation__button-menu");
let menu = document.querySelector(".navigation__list-menu-open");
let link = document.querySelector(".main-header__link");
let cat_before = document.querySelector(".example__slider-picture-before");let cat_after = document.querySelector(".example__slider-picture-after");
let button_before = document.querySelector(".slider-control__button--before");
let button_after = document.querySelector(".slider-control__button--after");
let input = document.querySelector(".slider-control__line");

map.style.display = "none";
iframe.style.display = "block";

link.classList.remove("main-header__link--bottom")
button.classList.add("navigation__button")
menu.classList.toggle("navigation__list-menu")

button.addEventListener("click", open_menu);

function open_menu() {
  button.classList.toggle("navigation__button--toggle");
  menu.classList.toggle("navigation__list-menu")
}

button_after.addEventListener("click", show_after);

function show_after() {
  cat_before.style.display = "none";
  cat_after.style.display = "block";
  cat_after.style.width = "100%";
}

button_before.addEventListener("click", show_before);

function show_before() {
  cat_before.style.display = "block";
  cat_before.style.width = "100%";
  cat_after.style.display = "none";
}

input.addEventListener("click", show_before_after);

function show_before_after() {
  cat_before.style.display = "block";
  cat_before.style.width = "50%";
  cat_after.style.display = "block";
  cat_after.style.width = "50%";
}
