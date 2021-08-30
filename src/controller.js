import * as model from "./model.js";
import State from "./productsState.js"
import productsView from "./views/productsView.js";
import addProductView from "./views/addProductView.js";
import updateProductView from "./views/editProductView.js";
import deleteProductView from "./views/deleteProductView.js";

async function controlProducts() {
    await model.fetchProducts();
    productsView.render(State.products);
}

async function controlAddProduct(product) {
    await model.addProduct(product);
    productsView.render(State.products);
}

async function controlUpdateProduct(product) {
    await model.updateProduct(product);
    productsView.render(State.products);
}

async function controlDeleteProduct(productId) {
    await model.deleteProduct(productId);
    productsView.render(State.products);
}

function init() {
    productsView.addHandlerRender(controlProducts);
    addProductView.addHandlerSaveProduct(controlAddProduct);
    updateProductView.addHandlerUpdateProduct(controlUpdateProduct);
    deleteProductView.addHandlerDeleteProduct(controlDeleteProduct);
};

init();