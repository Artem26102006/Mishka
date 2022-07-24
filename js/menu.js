let main_menu = document.querySelector(".main-menu");
let user_menu = document.querySelector(".user-menu");
let button = document.querySelector(".logo-burger__button");

main_menu.classList.add("menu--unshow");
user_menu.classList.add("menu--unshow");
button.classList.add("logo-burger__button--open");

button.addEventListener("click", function () {
  main_menu.classList.toggle("menu--unshow");
  user_menu.classList.toggle("menu--unshow");
  button.classList.toggle("logo-burger__button--close");
});
