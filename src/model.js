import { API_URL } from "./infrastructure/config.js";
import httpClient from "./infrastructure/httpClient.js";
import Product from "./product.js";
import State from "./productsState.js";

export async function fetchProducts() {
    const results = await httpClient.get(API_URL);
    const products = results.map(r => new Product(r.id, r.title, r.description, r.price, r.imgUrl, r.showInSlider));

    products.forEach(product => {
        State.pushProductToState(product);
    });
};

export async function addProduct(product) {
    try {
        const productResponse = await httpClient.post(API_URL, product);
        State.unshiftProductInState(productResponse);
    } catch (error) {
        console.error(error);
    }
};

export async function updateProduct(product) {
    try {
        await httpClient.put(`${API_URL}${product.id}`, product);
        State.updateProductInState(product);
    } catch (error) {
        console.error(error);
    }
};

export async function deleteProduct(productId) {
    try {
        await httpClient.xdelete(`${API_URL}${productId}`);
        State.deleteProductFromState(productId);
    } catch (error) {
        console.error(error);
    }
};