let button_show = document.querySelector(".descrip-product__button");
let button_unshow = document.querySelector(".popup__button");
let popup = document.querySelector(".popup");

button_show.addEventListener('click', function(){
  popup.style.display = 'block';
})

button_unshow.addEventListener('click', function(){
  popup.style.display = 'none';
})

