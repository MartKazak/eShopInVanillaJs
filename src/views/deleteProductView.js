import SimpleModal from "../components/modal/modal.js";

class DeleteProductView {
    #parentElement = document.getElementById("delete-product-template").content.cloneNode(true).getElementById("product-delete-confimation");

    addHandlerDeleteProduct(handler) {
        document.addEventListener("click", async event => {
            event.preventDefault();

            if (event.target && event.target.id == "btn-delete-product") {
                const productCard = event.target.closest(".card");
                const id = productCard.querySelector(".card-id").innerText;
                const title = productCard.querySelector(".card-title").innerText;

                this.#parentElement.innerHTML = `Do you really want to delete product: '${title}'`;

                const addProductModal = new SimpleModal("Remove product", null, null, null, this.#parentElement);

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
}

export default new DeleteProductView();