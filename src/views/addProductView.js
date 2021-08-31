import Product from "../product.js";
import SimpleModal from "../components/modal/modal.js";

class AddProductView {
    #parentElement = document.getElementById("add-product-template").content.cloneNode(true).getElementById("add-product-form");
    #btnAddProduct = document.getElementById("btn-add-product");

    addHandlerSaveProduct(handler) {
        this.#toggleVisibilityInSlider();
        this.#addProductHandler(handler);
    }

    #addProductHandler(handler) {
        this.#btnAddProduct.addEventListener("click", async event => {
            event.preventDefault();
            this.#setInSliderBtnText();

            const addProductModal = new SimpleModal("Add product", null, null, null, this.#parentElement);
            const modalResponse = await addProductModal.question();

            if (modalResponse) {
                const product = this.#getProductFromForm();
                handler(product);
                this.#resetForm();
            }
        });
    }

    #getProductFromForm() {
        const productPropertiesArray = [...new FormData(this.#parentElement)];
        const productObject = Object.fromEntries(productPropertiesArray);

        return new Product(
            null,
            productObject.title,
            productObject.description,
            productObject.price,
            productObject.imgUrl,
            productObject.showInSlider.toLowerCase() === "true");
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

    #resetForm() {
        this.#parentElement.reset();
        this.#parentElement.querySelector("#product-show-in-slider").value = "false";
        this.#parentElement.querySelector("#btn-toggle-slider-option").innerText = "Add to slider"
    }
}

export default new AddProductView();