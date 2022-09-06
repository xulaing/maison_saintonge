class Slideshow {

    constructor() {
        this.prevIndexLeft = [0, 2, 4];
        this.prevIndexRight = [1, 3, 5];
        this.nextIndex = [1, 0, 3, 2, 5, 4];
        this.right = true;
        this._stop = false;
        this.initSlides();
        this.initSlideshow();
    }

    // Set a `data-slide` index on each slide for easier slide control.
    initSlides() {
        this.container = $('[data-slideshow]');

        console.log(this.container);
        this.leftSlides = $(this.container[0]).find('img');
        this.rightSlides = $(this.container[1]).find('img');
        var arr = [];
        for (let i = 0; i < this.leftSlides.length; i++) {
            arr.push(this.leftSlides[i]);
            arr.push(this.rightSlides[i]);
        }
        this.slides = $(arr);
        this.slides.each((idx, slide) => $(slide).attr('data-slide', idx));
        console.log(this.slides);
    }

    // Pseudo-preload images so the slideshow doesn't start before all the images
    // are available.
    initSlideshow() {
        this.imagesLoaded = 0;
        this.currentIndex = 0;
        this.setNextSlide();
        this.right = false;
        this.setNextSlide();
        this.right = true;
        this.slides.each((idx, slide) => {
            $('<img>').on('load', $.proxy(this.loadImage, this)).attr('src', $(slide).attr('src'));
        });
    }

    // When one image has loaded, check to see if all images have loaded, and if
    // so, start the slideshow.
    loadImage() {
        this.imagesLoaded++;
        if (this.imagesLoaded >= this.slides.length) { this.playSlideshow() }
    }

    // Start the slideshow.
    playSlideshow() {
        this.slideshow = setInterval(() => { this.performSlide() }, 4000);
    }

    // 1. Previous slide is unset.
    // 2. What was the next slide becomes the previous slide.
    // 3. New index and appropriate next slide are set.
    // 4. Fade out action.
    performSlide() {

        if (this.right) {
            if (this.prevRightSlide) { this.prevRightSlide.removeClass('prevRight fade-out') }

            this.nextRightSlide.removeClass('next');
            this.prevRightSlide = this.nextRightSlide;
            this.prevRightSlide.addClass('prevRight');
        } else if (!this.right) {
            if (this.prevLeftSlide) { this.prevLeftSlide.removeClass('prevLeft fade-out') }

            this.nextLeftSlide.removeClass('next');
            this.prevLeftSlide = this.nextLeftSlide;
            this.prevLeftSlide.addClass('prevLeft');
        }

        if (this.right) {
            this.currentIndex++
            if (this.currentIndex >= 3) { this.currentIndex = 0 }
        }

        this.setNextSlide();

        if (this.right) {
            this.prevRightSlide.addClass('fade-out');
            this.right = false;
        } else if (!this.left) {
            this.prevLeftSlide.addClass('fade-out');
            this.right = true;
        }
    }

    setNextSlide() {
        if (this.right) {
            this.nextRightSlide = this.container.find(`[data-slide="${this.prevIndexRight[this.currentIndex]}"]`).first();
            this.nextRightSlide.addClass('next');
        } else if (!this.right) {
            this.nextLeftSlide = this.container.find(`[data-slide="${this.prevIndexLeft[this.currentIndex]}"]`).first();
            this.nextLeftSlide.addClass('next');
        }
    }

    changeSlide() {
        let leftSlides = document.getElementById("left-carousel");
        let rightSlides = document.getElementById("right-carousel");
        rightSlides.addEventListener("click", () => {
            clearInterval(this.slideshow);
            this.performSlide();
            this.playSlideshow()
        });
        leftSlides.addEventListener("click", () => {
            clearInterval(this.slideshow);
            this.performSlide();
            this.playSlideshow()
        });
    }
}