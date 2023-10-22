const slides = document.querySelectorAll('.slide');
const sliderBtnNext = document.querySelector('.slider-btn_next');
const sliderBtnPrev = document.querySelector('.slider-btn_prev');
let index = 0;

sliderBtnNext.onclick = function () {

    slides[index].classList.toggle('slide_active');

    if (index < slides.length - 1) {
        index++;
    } else {
        index = 0;
    }

    slides[index].classList.toggle('slide_active');
};

sliderBtnPrev.onclick = function () {

    slides[index].classList.toggle('slide_active');

    if (index <= 0) {
        index = slides.length - 1;
    } else {
        index--;
    }

    slides[index].classList.toggle('slide_active');
}