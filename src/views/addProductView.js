import Product from "../product.js";
import SimpleModal from "../components/modal.js";

class AddProductView {
    #parentElement = document.getElementById("add-product-template").content.cloneNode(true).getElementById("add-product-form");
    #btnOpenAddProductModal = document.getElementById("btn-add-product");

    addHandlerSaveProduct(handler) {
        this.#btnOpenAddProductModal.addEventListener("click", async e => {
            e.preventDefault();
            const addProductModal = new SimpleModal("Add product", null, null, null, this.#parentElement);
            try {
                const modalResponse = await addProductModal.question();

                if (modalResponse) {
                    const productPropertiesArray = [...new FormData(this.#parentElement)];
                    const productObject = Object.fromEntries(productPropertiesArray);
                    const product = new Product(null, productObject.title, productObject.description, productObject.price, productObject.imgUrl);
                    handler(product);
                }
            } catch(err) {
                console.log(err);
            }
        });
    }

    //TODO: investigate if this one is still needed
    // #clear() {
    //     this.#parentElement.innerHTML = "";
    // }
}

export default new AddProductView();