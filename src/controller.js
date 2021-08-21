import * as model from "./model.js";
import productsView from "./productsView.js";
import addProductView from "./addProductView.js";

async function controlProducts() {
    await model.fetchProducts();
    productsView.render(model.state.products);
}

async function controlAddProduct(product) {
    await model.addProduct(product);
}

function init() {
    productsView.addHandlerRender(controlProducts);
    addProductView.addHandlerSaveProduct(controlAddProduct);
};

init();

//TODO: try convert it into a class with method run, then create app.js file and call that method there