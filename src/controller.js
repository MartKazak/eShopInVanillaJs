import * as model from "./model.js";
import State from "./productsState.js"
import productsView from "./views/productsView.js";
import addProductView from "./views/addProductView.js";
import updateProductView from "./views/editProductView.js";
import deleteProductView from "./views/deleteProductView.js";
import errorView from "./views/errorView.js";

async function controlProducts() {
    try {
        await model.fetchProducts();
        productsView.render(State.products);
    } catch (error) {
        errorView.renderError(error);
    }
}

async function controlAddProduct(product) {
    try {
        await model.addProduct(product);
        productsView.render(State.products);
    } catch (error) {
        errorView.renderError(error);
    }
}

async function controlUpdateProduct(product) {
    try {
        await model.updateProduct(product);
        productsView.render(State.products);
    } catch (error) {
        errorView.renderError(error);
    }
}

async function controlDeleteProduct(productId) {
    try {
        await model.deleteProduct(productId);
        productsView.render(State.products);
    } catch (error) {
        errorView.renderError(error);
    }
}

function init() {
    productsView.addHandlerRender(controlProducts);
    addProductView.addHandlerSaveProduct(controlAddProduct);
    updateProductView.addHandlerUpdateProduct(controlUpdateProduct);
    deleteProductView.addHandlerDeleteProduct(controlDeleteProduct);
};

init();