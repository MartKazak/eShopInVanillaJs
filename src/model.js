import httpClient from "./infrastructure/httpClient.js";
import { API_URL } from "./infrastructure/config.js";
import Product from "./product.js";

export const state = {
    products: []
};

export async function fetchProducts() {
    const results = await httpClient.get(API_URL);
    const products = results.map(r => new Product(r.id, r.title, r.description, r.price, r.imgUrl, r.showInSlider));
    state.products = products;
};

export async function addProduct(product) {
    try {
        await httpClient.post(API_URL, product);
        addProductInState(product);
    } catch (error) {
        console.error(error);
    }
};

export async function updateProduct(product) {
    try {
        await httpClient.put(`${API_URL}${product.id}`, product);
        updateProductInState(product);
    } catch (error) {
        console.error(error);
    }
};

export async function deleteProduct(productId) {
    try {
        await httpClient.xdelete(`${API_URL}${productId}`);
        deleteProductFromState(productId);
    } catch (error) {
        console.error(error);
    }
};

function addProductInState(product) {
    state.products.unshift(product);
}

function updateProductInState(product) {
    const productIndex = state.products.findIndex(p => p.id == product.id);
    state.products[productIndex] = product;
}

function deleteProductFromState(productId) {
    state.products = state.products.filter(p => p.id != productId);
}