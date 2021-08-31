import Product from "../product";
import SimpleModal from "../components/modal/modal.js";

class UpdateProductView {
    #parentElement = document.getElementById("add-product-template").content.cloneNode(true).getElementById("add-product-form");

    addHandlerUpdateProduct(handler) {
        this.#toggleVisibilityInSlider();

        document.addEventListener("click", async event => {
            event.preventDefault();

            if (event.target && event.target.id == "btn-update-product") {
                const productCard = event.target.closest(".card");
                this.#setProductProperties(productCard);
                this.#setInSliderBtnText();

                const addProductModal = new SimpleModal("Add product", null, null, null, this.#parentElement);
                const modalResponse = await addProductModal.question();

                if (modalResponse) {
                    const product = this.#getProductFromForm();
                    handler(product);
                }
            }
        });
    }

    #setProductProperties(productCard) {
        const id = productCard.querySelector(".card-id").innerText;
        const title = productCard.querySelector(".card-title").innerText;
        const price = productCard.querySelector(".card-price").innerText;
        const description = productCard.querySelector(".card-description").innerText;
        const imgUrl = productCard.querySelector(".card-image").firstElementChild.src;
        const showInSlider = productCard.querySelector(".card-show-in-slider").innerText;

        this.#parentElement.querySelector("#product-id").value = id;
        this.#parentElement.querySelector("#product-title").value = title;
        this.#parentElement.querySelector("#product-description").value = description;
        this.#parentElement.querySelector("#product-price").value = price;
        this.#parentElement.querySelector("#product-img-url").value = imgUrl;
        this.#parentElement.querySelector("#product-show-in-slider").value = showInSlider;
    }

    #toggleVisibilityInSlider() {
        this.#parentElement.querySelector("#btn-toggle-slider-option").addEventListener("click", _ => {
            const showInSliderElement = this.#parentElement.querySelector("#product-show-in-slider");
            const showInSliderValue = showInSliderElement.value.toLowerCase() === "true";
            showInSliderElement.value = !showInSliderValue;
            this.#setInSliderBtnText();
        });
    }

    #setInSliderBtnText() {
        const showInSliderElement = this.#parentElement.querySelector("#product-show-in-slider");
        const showInSliderValue = showInSliderElement.value.toLowerCase() === "true";
        const showInSliderBtnText = showInSliderValue ? "Remove from slider" : "Add to slider";
        const showInSliderBtn = this.#parentElement.querySelector("#btn-toggle-slider-option");
        showInSliderBtn.innerText = showInSliderBtnText;
    }

    #getProductFromForm() {
        const productPropertiesArray = [...new FormData(this.#parentElement)];
        const productObject = Object.fromEntries(productPropertiesArray);

        return new Product(
            productObject.id,
            productObject.title,
            productObject.description,
            productObject.price,
            productObject.imgUrl,
            productObject.showInSlider.toLowerCase() === "true");
    }
}

export default new UpdateProductView();