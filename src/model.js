import { API_URL, get } from "../http-helper.js";
import Product from "./product.js";

export const state = {
    products: []
};

export async function fetchProducts() {
    const results = await get(`${API_URL}/products`);
    const products = results.map(r => new Product(r.id, r.title, r.description, r.price));
    state.products = products;
    console.log(state.products);
};