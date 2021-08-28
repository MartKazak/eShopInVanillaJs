export default class Slider {
    #sliderContainer;
    #btnLeft;
    #btnRight;
    #dotContainer;
    #slides;
    #currentSlide = 0;
    #slidesAmount = 0;
    #slidesContent = [];

    constructor(sliderContainerId, slidesContent) {
        this.#sliderContainer = document.getElementById(sliderContainerId);
        this.#slidesContent = slidesContent;

        this.#clear();
        this.#renderSlidesMarkup();
        this.#goToSlide(0);
        this.#createDots();
        this.#activateDot(0);

        this.#addButtonsHandlers();
        this.#addKeyboardHandler();
        this.#addDotsHandler();
    }

    #clear() {
        this.#sliderContainer.innerHTML = "";
    }

    #renderSlidesMarkup() {
        const btnLeftHtml = `<button class="slider__btn slider__btn--left">&larr;</button>`;
        const btnRightHtml = `<button class="slider__btn slider__btn--right">&rarr;</button>`;
        const dotsHtml = `<div class="dots"></div>`;

        this.#sliderContainer.insertAdjacentHTML("beforeend", btnLeftHtml);
        this.#sliderContainer.insertAdjacentHTML("beforeend", btnRightHtml);
        this.#sliderContainer.insertAdjacentHTML("beforeend", dotsHtml);

        this.#slidesContent.forEach(slide => {
            this.#sliderContainer.prepend(slide.markup);
        });

        this.#slides = this.#sliderContainer.querySelectorAll(".slide");
        this.#slidesAmount = this.#slides.length;
        this.#btnLeft = this.#sliderContainer.querySelector(".slider__btn--left");
        this.#btnRight = this.#sliderContainer.querySelector(".slider__btn--right");
        this.#dotContainer = this.#sliderContainer.querySelector(".dots");
    }

    #createDots() {
        this.#slides.forEach((slide, i) => {
            const dotHtml = `<button class="dots__dot" data-slide="${i}"></button>`;
            this.#dotContainer.insertAdjacentHTML("beforeend", dotHtml);
            this.#addSlideClickHandler(slide); //TODO: this one is hidden here, move to other place
        });
    }

    #activateDot(slide) {
        this.#sliderContainer.querySelectorAll(".dots__dot")
            .forEach(dot => dot.classList.remove("dots__dot--active"));

        this.#sliderContainer.querySelector(`.dots__dot[data-slide="${slide}"]`)
            .classList.add("dots__dot--active");
    }

    #goToSlide(slide) {
        this.#slides.forEach((s, i) =>
            (s.style.transform = `translateX(${100 * (i - slide)}%)`)
        );
    }

    #nextSlide() {
        if (this.#currentSlide === this.#slidesAmount - 1) {
            this.#currentSlide = 0;
        } else {
            this.#currentSlide++;
        }

        this.#goToSlide(this.#currentSlide);
        this.#activateDot(this.#currentSlide);
    }

    #previousSlide() {
        if (this.#currentSlide === 0) {
            this.#currentSlide = this.#slidesAmount - 1;
        } else {
            this.#currentSlide--;
        }

        this.#goToSlide(this.#currentSlide);
        this.#activateDot(this.#currentSlide);
    }

    #addButtonsHandlers() {
        this.#btnRight.addEventListener("click", _ => this.#nextSlide());
        this.#btnLeft.addEventListener("click", _ => this.#previousSlide());
    }

    #addKeyboardHandler() {
        this.#sliderContainer.addEventListener("keydown", e => {
            e.key === "ArrowLeft" && this.#previousSlide();
            e.key === "ArrowRight" && this.#nextSlide();
        });
    }

    #addDotsHandler() {
        this.#dotContainer.addEventListener("click", e => {
            if (e.target.classList.contains("dots__dot")) {
                const slide = e.target.dataset.slide;
                this.#goToSlide(slide);
                this.#activateDot(slide);
            }
        });
    }

    #addSlideClickHandler(slide) {
        slide.addEventListener("click", e => window.location.href = "http://stackoverflow.com")
    }
}