// import { API_URL, get, post, put, xdelete } from "./http-helper.js";
// import Product from "./src/product.js";
// import Products from "./src/products.js";

// import {showProducts} from "./src/controller.js";

// showProducts();

// async function getProducts() {
//     const results = await get(`${API_URL}/products`);
//     const mappedProducts = results.map(r => new Product(r.id, r.title, r.description, r.price));
//     const products = new Products(mappedProducts);
//     console.log(products);
//     createProductCard(products);
// };

// function createProductCard(products = []) {
//     const productsContainer = document.getElementById("products-container");

//     products.forEach(product => {
//         const productCardTemplate = document
//             .getElementById("product-card-template")
//             .content.cloneNode(true);
//         productCardTemplate.querySelector(".card-title").innerText = product.title;
//         productCardTemplate.querySelector(".card-description").innerText = product.description;
//         productCardTemplate.querySelector(".card-price").innerText = product.price;
//         productsContainer.appendChild(productCardTemplate);
//     });
// }


// ["load"].forEach(event => {
//     window.addEventListener(event, getProducts());
//     // const productsContainer = document.getElementById("products-container");

//     // const updateProductElement = document.querySelector(".update-product");
//     // console.log(updateProductElement)
//     // // console.log(productsContainer)
//     // updateProductElement.addEventListener("submit", function(e) {
//     //     e.preventDefault();
//     //   const dataArr = [...new FormData(this)];
//     //   const data = Object.fromEntries(dataArr);
//     //   put(`${API_URL}/products/6`, data)
//     //     console.log("DATA:", data)
//     //});
// });

