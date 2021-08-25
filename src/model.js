import { API_URL, get, post, put, xdelete } from "../http-helper.js";
import Product from "./product.js";

export const state = {
    products: []
};

export async function fetchProducts() {
    const results = await get(`${API_URL}/products`);
    const products = results.map(r => new Product(r.id, r.title, r.description, r.price, r.imgUrl));
    state.products = products;
};

export async function addProduct(product) {
    try {
        await post(`${API_URL}/products`, product);
        addProductInState(product);
    } catch (error) {
        console.error(error);
    }
};

export async function updateProduct(product) {
    try {
        await put(`${API_URL}/products/${product.id}`, product);
        updateProductInState(product);
    } catch (error) {
        console.error(error);
    }
};

export async function deleteProduct(productId) {
    try {
        await xdelete(`${API_URL}/products/${productId}`);
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