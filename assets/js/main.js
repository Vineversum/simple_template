slides = document.getElementsByClassName('carousel-slide');
currentSlide = 0;

document.querySelector('.menu__button').onclick = (e) => {
    e.currentTarget.classList.toggle('active');
    document.querySelector('.menu__list').classList.toggle('active');
};
document.querySelector('.prev').onclick = prevSlide;

document.querySelector('.next').onclick = nextSlide;


function prevSlide() {
    slides[currentSlide].classList.toggle('active');
    currentSlide = (--currentSlide + slides.length) % slides.length;
    slides[currentSlide].classList.toggle('active'); 
};

function nextSlide() {
    slides[currentSlide].classList.toggle('active');
    currentSlide = (++currentSlide) % slides.length;
    slides[currentSlide].classList.toggle('active'); 
};

setInterval(nextSlide, 2000);