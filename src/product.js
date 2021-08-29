import { DEFAULT_IMG_URL } from "./infrastructure/config.js";

export default class Product {
    constructor(id, title, description, price, imgUrl, showInSlider) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.imgUrl = imgUrl || DEFAULT_IMG_URL;
        this.showInSlider = showInSlider;
    }
}