let loop;
let slideIndex = 2;
let carrouselTimeout;
const showSlides = () => {
    const slides = document.getElementsByClassName("slide")

    for (let i = 0; i < slides.length; i++) {
        if (slideIndex === 2) {
            slides[slideIndex].style.opacity = 1;
            setTimeout(() => {
                slides[i].style.opacity = 1;
            }, 3000)
            if (i < 2) {
                slides[i].classList.remove('fade-carousel');
            }
        }
        if (i > slideIndex) {
            slides[i].style.opacity = 0;
            slides[i].classList.add('fade-carousel');
        } else {
            slides[i].style.opacity = 1;
        }
    }

    slideIndex--;
    if (slideIndex < 0) { slideIndex = 2 }

    carrouselTimeout = setTimeout(showSlides, 5000);
}

const goToSlide = (id) => {
    clearTimeout(carrouselTimeout);
    slideIndex = id;
    showSlides();
}