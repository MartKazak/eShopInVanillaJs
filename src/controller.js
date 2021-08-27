import * as model from "./model.js";
import productsView from "./views/productsView.js";
import addProductView from "./views/addProductView.js";
import updateProductView from "./views/editProductView.js";
import deleteProductView from "./views/deleteProductView.js";
import sliderView from "./views/sliderView.js";

async function controlProducts() {
    await model.fetchProducts();
    productsView.render(model.state.products);
    sliderView.render(model.state.products);
    sliderView.slider();
}

async function controlAddProduct(product) {
    await model.addProduct(product);
    productsView.render(model.state.products);
}

async function controlUpdateProduct(product) {
    await model.updateProduct(product);
    productsView.render(model.state.products);
}

async function controlDeleteProduct(productId) {
    await model.deleteProduct(productId);
    productsView.render(model.state.products);
}

function init() {
    productsView.addHandlerRender(controlProducts);
    addProductView.addHandlerSaveProduct(controlAddProduct);
    updateProductView.addHandlerUpdateProduct(controlUpdateProduct);
    deleteProductView.addHandlerDeleteProduct(controlDeleteProduct);
};

init();

//TODO: try convert it into a class with method run, then create app.js file and call that method there