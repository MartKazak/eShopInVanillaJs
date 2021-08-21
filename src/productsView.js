class ProductsView {
    #parentElement = document.getElementById("products-container");
    #products;

    render(products){
        this.#products = products;
        this.#clear();
        this.#generateMarkup();
    }

    addHandlerRender(handler) {
        ["load"].forEach(event => window.addEventListener(event, handler));
    }

    #clear() {
        this.#parentElement.innerHTML = "";
    }

    #generateMarkup() {
        this.#products.forEach(product => {
            const productCardTemplate = document.getElementById("product-card-template").content.cloneNode(true);
            productCardTemplate.querySelector(".card-title").innerText = product.title;
            productCardTemplate.querySelector(".card-description").innerText = product.description;
            productCardTemplate.querySelector(".card-price").innerText = product.price;
            this.#parentElement.appendChild(productCardTemplate);
        });
    }
}

export default new ProductsView();