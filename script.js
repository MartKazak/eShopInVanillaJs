import { API_URL, get, post, put, xdelete } from "./http-helper.js";

async function getProducts() {
    const products = await get(`${API_URL}/products`);
    console.log(products);
    createProductCard(products);
};

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
    window.addEventListener(event, getProducts());
    const productsContainer = document.getElementById("products-container");

    const updateProductElement = document.querySelector(".update-product");
    console.log(updateProductElement)
    // console.log(productsContainer)
    updateProductElement.addEventListener("submit", function(e) {
        e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      put(`${API_URL}/products/6`, data)
        console.log("DATA:", data)
    });
});

