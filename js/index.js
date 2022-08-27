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
        var left = document.getElementsByClassName("test");
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