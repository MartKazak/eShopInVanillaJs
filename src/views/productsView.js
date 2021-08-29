import Slider from "../components/slider/slider.js";
import ImageSlide from "../components/imageSlide.js";

class ProductsView {
    #parentElement = document.getElementById("products-container-placeholder");
    #products;

    render(products){
        this.#products = products;
        this.#clear();
        this.#generateMarkup();
        this.#generateSlider();
    }

    addHandlerRender(handler) {
        ["load"].forEach(event => window.addEventListener(event, handler));
    }

    #clear() {
        this.#parentElement.innerHTML = "";
    }

    #generateMarkup() {
        const productCardTemplate = document.getElementById("product-card-template");
        const productsContainer = document.createElement("div");
        productsContainer.classList.add("items-container");

        this.#products.forEach(product => {
            const productCard = document.importNode(productCardTemplate.content, true);
            productCard.querySelector(".card-id").innerText = product.id;
            productCard.querySelector(".card-show-in-slider").innerText = product.showInSlider;
            productCard.querySelector(".card-title").innerText = product.title;
            productCard.querySelector(".card-description").innerText = product.description;
            productCard.querySelector(".card-price").innerText = product.price;
            productCard.querySelector(".card-image").firstElementChild.src = product.imgUrl;
            productsContainer.appendChild(productCard);
        });

        this.#parentElement.appendChild(productsContainer);
    }

    #generateSlider() {
        const slides = this.#products.filter(p => p.showInSlider)
            .map(p => new ImageSlide(p.title, p.imgUrl))
            .reverse();

        new Slider("products-slider-container", slides);
    }
}

export default new ProductsView();