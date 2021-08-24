import SimpleModal from "../modal";

class DeleteProductView {
    #parentElement = document.getElementById("delete-product-template").content.cloneNode(true).getElementById("product-delete-confimation");

    addHandlerDeleteProduct(handler) {
        const self = this;

        document.addEventListener("click", async function(event) {
            event.preventDefault();

            if (event.target && event.target.id == "btn-delete-product") {
                const productCard = event.target.closest(".card");
                const id = productCard.querySelector(".card-id").innerText;
                const title = productCard.querySelector(".card-title").innerText;

                self.#parentElement.innerHTML = `Do you really want to delete product: '${title}'`;

                const addProductModal = new SimpleModal("Remove product", null, null, null, self.#parentElement);

                try {
                    const modalResponse = await addProductModal.question();

                    if (modalResponse) {
                        handler(id);
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

export default new DeleteProductView();