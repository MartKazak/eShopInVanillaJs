export default class Slider {
    // #currentSlide;
    // #slidesAmount;


    #slides = document.querySelectorAll('.slide');
    #btnLeft = document.querySelector('.slider__btn--left');
    #btnRight = document.querySelector('.slider__btn--right');
    #dotContainer = document.querySelector('.dots');
    #currentSlide = 0;
    #slidesAmount = this.#slides.length;
    constructor() {
        this.#currentSlide = 0;
        this.#slidesAmount = this.#slides.length;

        this.#goToSlide(0);
        this.#createDots();
        this.#activateDot(0);

        this.#addButtonsHandlers();
        this.#addKeyboardHandler();
        this.#addDotsHandler();
    }

    #createDots() {
        const self = this;
        this.#slides.forEach(function (_, i) {
            self.#dotContainer.insertAdjacentHTML(
                'beforeend',
                `<button class="dots__dot" data-slide="${i}"></button>`
            );
        });
    }

    #activateDot(slide) {
        document.querySelectorAll('.dots__dot')
            .forEach(dot => dot.classList.remove('dots__dot--active'));

        document.querySelector(`.dots__dot[data-slide="${slide}"]`)
            .classList.add('dots__dot--active');
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
        this.#btnRight.addEventListener('click', this.#nextSlide);
        this.#btnLeft.addEventListener('click', this.#previousSlide);
    }

    #addKeyboardHandler() {
        document.addEventListener('keydown', function (e) {
            e.key === 'ArrowLeft' && this.#previousSlide();
            e.key === 'ArrowRight' && this.#nextSlide();
        });
    }

    #addDotsHandler() {
        this.#dotContainer.addEventListener('click', function (e) {
            if (e.target.classList.contains('dots__dot')) {
                const slide = e.target.dataset.slide;
                this.#goToSlide(slide);
                this.#activateDot(slide);
            }
        });
    }
}