const backButton = document.querySelector('.buttons-slider__button');
const goButton = document.querySelector('.buttons-slider__button--reverse');
const listItems = document.querySelectorAll('.review__item');
let index = 0;

backButton.disabled = true;

goButton.addEventListener('click', () => {
    index += 1;
    for (let i = 0; i < listItems.length; i++) {
        const element = listItems[i];
        if (i === index) {
            element.classList.remove('d-none');
        } else {
            element.classList.add('d-none');
        }
        if (index === listItems.length - 1) {
            goButton.disabled = true;
        }
        if (index > 0) {
            backButton.disabled = false;
        }
    }
});

backButton.addEventListener('click', () => {
    index -= 1;
    for (let i = 0; i < listItems.length; i++) {
        const element = listItems[i];
        if (i === index) {
            element.classList.remove('d-none');
        } else {
            element.classList.add('d-none');
        }
        if (index < listItems.length - 1) {
            goButton.disabled = false;
        }
        if (index == 0) {
            backButton.disabled = true;
        }
    }
    console.log(index)
});
