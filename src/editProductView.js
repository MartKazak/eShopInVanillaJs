// import Product from "./product";
// import SimpleModal from "../modal";

// class UpdateProductView {
//     #parentElement = document.getElementById("add-product-template").content.cloneNode(true).getElementById("add-product-form");
//     #template = document.getElementById("product-card-template");
//     //#btnOpenUpdateProductModal = document.getElementById("product-card-template").content.cloneNode(true).getElementById("btn-update-product");

//     addHandlerUpdateProduct(handler) {
//         const node = document.importNode(this.#template.content, true);
//         const placeHolder = document.getElementById("update-product-container");
//         placeHolder.replaceWith(node);

//         const btn = document.getElementById("btn-update-product");
//         //const self = this;
//         // console.log(this.#btnOpenUpdateProductModal);
//         console.log(btn);
//         btn.addEventListener("click", function(e) {
//             console.log("EDIT....", this);
//             //e.preventDefault();
//             // const addProductModal = new SimpleModal("Add product", null, null, null, self.#parentElement);
//             // try {
//             //     const modalResponse = await addProductModal.question();

//             //     if (modalResponse) {
//             //         const productPropertiesArray = [...new FormData(self.#parentElement)];
//             //         const productObject = Object.fromEntries(productPropertiesArray);
//             //         const product = new Product(null, productObject.title, productObject.description, productObject.price);
//             //         handler(product);
//             //     }
//             // } catch(err) {
//             //     console.log(err);
//             // }
//         });
//     }

//     //TODO: investigate if this one is still needed
//     // #clear() {
//     //     this.#parentElement.innerHTML = "";
//     // }
// }

// export default new UpdateProductView();