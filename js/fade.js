$(document).ready(function () {
    $('#fade-logo').hide().delay(500).fadeIn(2000);
    $('.home-footer').hide().delay(1500).fadeIn(2000);
    $('#home-footer').hide().delay(1500).fadeIn(2000);
    $('#fade-logo').fadeOut(2000);
    $('#navbar').hide().delay(5000).fadeIn(2000);
    if ($(window).width() < 1025) {
        $('.carousel-wrap-mobile').hide().delay(5000).fadeIn(2000);
    }
    else {
        $('.carousel-wrap').hide().delay(5000).fadeIn(2000);
    }
    $('.footer').hide().delay(5000).fadeIn(2000);

    // carousel mobile
    setTimeout(() => {
        const slide = new Slideshow;
        slide.changeSlide();

        $("#myCarousel").attr("data-bs-interval", "4000");
    }, 4000);
});

function footerColor() {
    setTimeout(function () {
        console.log(document.getElementById('white'));
        console.log(document.getElementsByClassName('link-white'));
        document.getElementById('white').style.color = "#F7F3EB";
        var arr = document.getElementsByClassName('link-white');
        Array.prototype.forEach.call(arr, function (element) {
            element.style.color = "#F7F3EB";
        });

    }, 3000);
};

setTimeout(footerColor, 3000);