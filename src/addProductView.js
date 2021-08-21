import Product from "./product";

class AddProductView {
    #parentElement = document.getElementById("add-product-form");

    //TODO: update state with new item if ajax call was success
    //TODO: try to add prop #product = new Product(); and later set product props inside handler
    addHandlerSaveProduct(handler) {
        this.#parentElement.addEventListener("submit", function(e) {
            e.preventDefault();
            const productPropertiesArray = [...new FormData(this)];
            const productObject = Object.fromEntries(productPropertiesArray);
            const product = new Product(null, productObject.title, productObject.description, productObject.price);
            handler(product);
        });
    }

    //TODO: investigate if this one is still needed
    // #clear() {
    //     this.#parentElement.innerHTML = "";
    // }
}

export default new AddProductView();