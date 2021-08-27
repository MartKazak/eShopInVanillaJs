export default class Product {
    constructor(id, title, description, price, imgUrl, showInSlider = false) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.imgUrl = imgUrl;
        this.showInSlider = showInSlider;
    }
}