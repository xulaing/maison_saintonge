/*window.addEventListener("DOMContentLoaded", () => {
    const slides = document.getElementsByClassName("slide");
    console.log(slides)
    slides[2].style.opacity = 1;
    slides[2].classList.add('fade-carousel');
    slides[1].classList.add('fade-carousel');
    slides[0].classList.add('fade-carousel');
    setTimeout(() => { showSlides() }, 4000)
})
*/
window.addEventListener("DOMContentLoaded", function (e) {
    var carousel = document.getElementById("left-carousel");
    var fadeComplete = function (e) { carousel.appendChild(arr[0]); };
    var arr = carousel.getElementsByTagName("img");
    for (var i = 0; i < arr.length; i++) {
        arr[i].addEventListener("animationend", fadeComplete, false);
    }

    setTimeout(() => {
        var left = document.getElementsByClassName("left-delay");
        left[0].style.setProperty("animation-delay", 6 + 's');
    }, 28000);
}, false);

window.addEventListener("DOMContentLoaded", function (e) {
    var carousel = document.getElementById("right-carousel");
    var fadeComplete = function (e) { carousel.appendChild(arr[0]); };
    var arr = carousel.getElementsByTagName("img");
    for (var i = 0; i < arr.length; i++) {
        arr[i].addEventListener("animationend", fadeComplete, false);
    }
}, false);

window.addEventListener("DOMContentLoaded", function (e) {
    var carousel = document.getElementById("mobile-carousel");
    var fadeComplete = function (e) { carousel.appendChild(arr[0]); };
    var arr = carousel.getElementsByTagName("img");
    for (var i = 0; i < arr.length; i++) {
        arr[i].addEventListener("animationend", fadeComplete, false);
    }
}, false);

const changeSlideLeft = () => {
    const carouselLeft = document.getElementsByClassName('left-delay');
    carouselLeft[0].style.setProperty("animation-delay", 2 + 's');
    carouselLeft[1].style.setProperty("animation-delay", 2 + 's');
    setTimeout(() => {
        carouselLeft[0].style.setProperty("animation-delay", 6 + 's');
        carouselLeft[1].style.setProperty("animation-delay", 6 + 's');
        carouselLeft[2].style.setProperty("animation-delay", 6 + 's');
    }, 2000);
}

const changeSlideRight = () => {
    const carouselRight = document.getElementsByClassName('right-delay');
    carouselRight[0].style.setProperty("animation-delay", 2 + 's');
    carouselRight[1].style.setProperty("animation-delay", 2 + 's');
    setTimeout(() => {
        carouselRight[0].style.setProperty("animation-delay", 6 + 's');
        carouselRight[1].style.setProperty("animation-delay", 6 + 's');
        carouselRight[2].style.setProperty("animation-delay", 6 + 's');
    }, 2000);
}

const changeSlideMobile = () => {
    const carouselMobile = document.getElementsByClassName('mobile-delay');
    carouselMobile[0].style.setProperty("animation-delay", 2 + 's');
    carouselMobile[1].style.setProperty("animation-delay", 2 + 's');
    setTimeout(() => {
        carouselMobile[0].style.setProperty("animation-delay", 6 + 's');
        carouselMobile[1].style.setProperty("animation-delay", 6 + 's');
        carouselMobile[2].style.setProperty("animation-delay", 6 + 's');
    }, 2000);
}