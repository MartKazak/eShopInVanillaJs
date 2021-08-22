import { API_URL, get, post, put } from "../http-helper.js";
import Product from "./product.js";

export const state = {
    products: []
};

export async function fetchProducts() {
    const results = await get(`${API_URL}/products`);
    const products = results.map(r => new Product(r.id, r.title, r.description, r.price));
    state.products = products;
};

export async function addProduct(product) {
    try {
        await post(`${API_URL}/products`, product);
        addProductState(product);
    } catch (error) {
        console.error(error);
    }
};

export async function updateProduct(product) {
    try {
        await put(`${API_URL}/products/${product.id}`, product);
        updateProductState(product);
    } catch (error) {
        console.error(error);
    }
};

function addProductState(product) {
    state.products.unshift(product);
}

function updateProductState(product) {
    const productIndex = state.products.findIndex(p => p.id == product.id);
    state.products[productIndex] = product;
}