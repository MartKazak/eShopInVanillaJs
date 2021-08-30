class ProductsState {
    #products = [];

    get products() {
        return this.#products;
    }

    pushProductToState(product) {
        this.#products.push(product);
    }

    unshiftProductInState(product) {
        this.#products.unshift(product);
    }

    updateProductInState(product) {
        const productIndex = this.#products.findIndex(p => p.id == product.id);
        this.#products[productIndex] = product;
    }

    deleteProductFromState(productId) {
        this.#products = this.#products.filter(p => p.id != productId);
    }
}

export default new ProductsState();