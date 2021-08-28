import { DEFAULT_IMG_URL } from "../infrastructure/config.js";

export default class ImageSlide {
    #imageUrl;
    #title;

    constructor(title, imageUrl) {
        this.#title = title || "";
        this.#imageUrl = imageUrl || DEFAULT_IMG_URL;

        this.markup = this.#generateMarkup();
    }

    #generateMarkup() {
        const imageHtml = `<img src="${this.#imageUrl}" alt=""><div class="slide-title"><p>${this.#title}</p></div>`;
        const slideHtml = document.createElement("div");
        slideHtml.classList.add("slide");
        slideHtml.insertAdjacentHTML('beforeend', imageHtml);

        return slideHtml;
    }
}