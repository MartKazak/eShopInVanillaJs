import * as model from "./model.js";
import productsView from "./productsView.js";

async function controlProducts() {
    await model.fetchProducts();
    const products = model.state.products;
    productsView.render(model.state.products);
}

["load"].forEach(event => window.addEventListener(event, controlProducts()));

//TODO: try convert it into a class with method run, then create app.js file and call that method there