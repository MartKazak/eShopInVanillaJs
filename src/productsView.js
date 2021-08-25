class ProductsView {
    #parentElement = document.getElementById("products-container-placeholder");
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
        const productCardTemplate = document.getElementById("product-card-template");
        const productsContainer = document.createElement("div");
        productsContainer.classList.add("items-container");

        this.#products.forEach(product => {
            const productCard = document.importNode(productCardTemplate.content, true);
            productCard.querySelector(".card-title").innerText = product.title;
            productCard.querySelector(".card-description").innerText = product.description;
            productCard.querySelector(".card-price").innerText = product.price;
            productCard.querySelector(".card-id").innerText = product.id;
            productCard.querySelector(".card-image").firstElementChild.src = product.imgUrl; //TODO: fix local host issue
            productsContainer.appendChild(productCard);
        });

        this.#parentElement.appendChild(productsContainer);
    }
}

export default new ProductsView();