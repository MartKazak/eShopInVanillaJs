export default class Products {
    constructor(products) {
        this.products = products;
    }

    async addProduct(product) {
        await post(`${API_URL}/products`);
    }

    async deleteProduct(id) {
        await xdelete(`${API_URL}/products/${id}`)
    }
}