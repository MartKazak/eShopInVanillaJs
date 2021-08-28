import Product from "../product.js";
import SimpleModal from "../components/modal.js";

class AddProductView {
    #parentElement = document.getElementById("add-product-template").content.cloneNode(true).getElementById("add-product-form");
    #btnAddProduct = document.getElementById("btn-add-product");

    addHandlerSaveProduct(handler) {
        this.#btnAddProduct.addEventListener("click", async event => {
            event.preventDefault();

            const addProductModal = new SimpleModal("Add product", null, null, null, this.#parentElement);

            try {
                const modalResponse = await addProductModal.question();

                if (modalResponse) {
                    const product = this.#getProductFromForm();
                    handler(product);
                    this.#resetForm();
                }
            } catch(err) {
                console.log(err);
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
            productObject.imgUrl);
    }

    #resetForm() {
        this.#parentElement.reset();
    }
}

export default new AddProductView();