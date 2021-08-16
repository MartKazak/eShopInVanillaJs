import { API_URL, getJson, post } from "./http-helper.js";
 
async function getProducts() {
    const products = await getJson(`${API_URL}/products`);
    console.log(products);
    createProductCard(products);
};

//getProducts();

function createProductCard(products = []) {
    const productsContainer = document.getElementById("products-container");
    products.forEach(product => {
        const productCardTemplate = document
            .getElementById("product-card-template")
            .content.cloneNode(true);
        productCardTemplate.querySelector(".card-title").innerText = product.title;
        productCardTemplate.querySelector(".card-description").innerText = product.description;
        productCardTemplate.querySelector(".card-price").innerText = product.price;                    
        productsContainer.appendChild(productCardTemplate);
    });
}

["load"].forEach(event => {
    window.addEventListener(event, getProducts())
})

