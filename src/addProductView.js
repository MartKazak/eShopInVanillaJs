import Product from "./product";
import SimpleModal from "../modal";

class AddProductView {
    #parentElement = document.getElementById("add-product-template").content.cloneNode(true).getElementById("add-product-form");
    #btnOpenAddProductModal = document.getElementById("btn-add-product");

    addHandlerSaveProduct(handler) {
        const self = this;
        console.log(this.#btnOpenAddProductModal);
        this.#btnOpenAddProductModal.addEventListener("click", async function(e) {
            console.log("Add....");
            e.preventDefault();
            const addProductModal = new SimpleModal("Add product", null, null, null, self.#parentElement);
            try {
                const modalResponse = await addProductModal.question();

                if (modalResponse) {
                    const productPropertiesArray = [...new FormData(self.#parentElement)];
                    const productObject = Object.fromEntries(productPropertiesArray);
                    const product = new Product(null, productObject.title, productObject.description, productObject.price);
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