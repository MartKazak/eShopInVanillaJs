class SliderView {

    addHandlerRender() {
        const slider = document.querySelector(".slider");
        const slides = document.querySelectorAll(".slide");
        //console.log(slides);
        const btnPrevious = document.querySelector(".slider__btn--left");
        const btnNext = document.querySelector(".slider__btn--right");
        let curSlide = 0;
        const maxSlide = slides.length;

        slider.style.overflow = "visible";

        const goToSlide = function(slide) {
            slides.forEach((s, i) =>
                (s.style.transform = `translateX(${100 * (i - slide)}%)`));
        };

        goToSlide(0);

        const nextSlide = function () {
            if (curSlide === maxSlide - 1) {
                curSlide = 0;
            } else {
                curSlide++;
            }

            goToSlide(curSlide);
        };

        const prevSlide = function () {
            if (curSlide === 0) {
                curSlide = maxSlide - 1;
            } else {
                curSlide--;
            }

            goToSlide(curSlide);
        };

        btnPrevious.addEventListener('click', nextSlide);
        btnNext.addEventListener('click', prevSlide);
    }
}

export default new SliderView();