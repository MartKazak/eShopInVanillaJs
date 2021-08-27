import Product from "../product";
import SimpleModal from "../../modal";

class UpdateProductView {
    #parentElement = document.getElementById("add-product-template").content.cloneNode(true).getElementById("add-product-form");

    addHandlerUpdateProduct(handler) {
        const self = this;

        document.addEventListener("click", async function(event) {
            event.preventDefault();

            if (event.target && event.target.id == "btn-update-product") {
                const productCard = event.target.closest(".card");
                const id = productCard.querySelector(".card-id").innerText;
                const title = productCard.querySelector(".card-title").innerText;
                const price = productCard.querySelector(".card-price").innerText;
                const description = productCard.querySelector(".card-description").innerText;
                const imgUrl = productCard.querySelector(".card-image").firstElementChild.src;

                self.#parentElement.querySelector("#product-id").value = id;
                self.#parentElement.querySelector("#product-title").value = title;
                self.#parentElement.querySelector("#product-description").value = description;
                self.#parentElement.querySelector("#product-price").value = price;
                self.#parentElement.querySelector("#product-img-url").value = imgUrl;

                const addProductModal = new SimpleModal("Add product", null, null, null, self.#parentElement);

                try {
                    const modalResponse = await addProductModal.question();

                    if (modalResponse) {
                        const productPropertiesArray = [...new FormData(self.#parentElement)];
                        const productObject = Object.fromEntries(productPropertiesArray);
                        const product = new Product(productObject.id, productObject.title, productObject.description, productObject.price, productObject.imgUrl);
                        handler(product);
                    }
                } catch(err) {
                    console.log(err);
                }
            }
        });
    }

    //TODO: investigate if this one is still needed
    // #clear() {
    //     this.#parentElement.innerHTML = "";
    // }
}

export default new UpdateProductView();