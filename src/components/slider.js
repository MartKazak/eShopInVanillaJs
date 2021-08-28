export default class Slider {
    #slides = document.querySelectorAll('.slide');
    #btnLeft = document.querySelector('.slider__btn--left');
    #btnRight = document.querySelector('.slider__btn--right');
    #dotContainer = document.querySelector('.dots');

    #currentSlide = 0;
    #slidesAmount = this.#slides.length;

    constructor() {
        this.#goToSlide(0);
        this.#createDots();
        this.#activateDot(0);

        this.#addButtonsHandlers();
        this.#addKeyboardHandler();
        this.#addDotsHandler();
    }

    #createDots() {
        this.#slides.forEach((_, i) => {
            const dotHtml = `<button class="dots__dot" data-slide="${i}"></button>`;
            this.#dotContainer.insertAdjacentHTML('beforeend', dotHtml);
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
        this.#btnRight.addEventListener('click', _ => this.#nextSlide());
        this.#btnLeft.addEventListener('click', _ => this.#previousSlide());
    }

    #addKeyboardHandler() {
        document.addEventListener('keydown', e => {
            e.key === 'ArrowLeft' && this.#previousSlide();
            e.key === 'ArrowRight' && this.#nextSlide();
        });
    }

    #addDotsHandler() {
        this.#dotContainer.addEventListener('click', e => {
            if (e.target.classList.contains('dots__dot')) {
                const slide = e.target.dataset.slide;
                this.#goToSlide(slide);
                this.#activateDot(slide);
            }
        });
    }
}