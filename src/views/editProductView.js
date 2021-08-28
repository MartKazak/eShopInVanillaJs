import Product from "../product";
import SimpleModal from "../components/modal/modal.js";

class UpdateProductView {
    #parentElement = document.getElementById("add-product-template").content.cloneNode(true).getElementById("add-product-form");

    addHandlerUpdateProduct(handler) {
        document.addEventListener("click", async event => {
            event.preventDefault();

            if (event.target && event.target.id == "btn-update-product") {
                const productCard = event.target.closest(".card");
                this.#setProductProperties(productCard);

                const addProductModal = new SimpleModal("Add product", null, null, null, this.#parentElement);

                try {
                    const modalResponse = await addProductModal.question();

                    if (modalResponse) {
                        const product = this.#getProductFromForm();
                        handler(product);
                    }
                } catch(err) {
                    console.log(err);
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

        this.#parentElement.querySelector("#product-id").value = id;
        this.#parentElement.querySelector("#product-title").value = title;
        this.#parentElement.querySelector("#product-description").value = description;
        this.#parentElement.querySelector("#product-price").value = price;
        this.#parentElement.querySelector("#product-img-url").value = imgUrl;
    }

    #getProductFromForm() {
        const productPropertiesArray = [...new FormData(this.#parentElement)];
        const productObject = Object.fromEntries(productPropertiesArray);

        return new Product(
            productObject.id,
            productObject.title,
            productObject.description,
            productObject.price,
            productObject.imgUrl);
    }
}

export default new UpdateProductView();