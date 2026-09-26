import { Locator,Page } from "@playwright/test";

class Product{
    page:Page
    addTocartBTN:Locator
    cartIcon:Locator

    constructor(page:Page){
        this.page=page
        this.addTocartBTN=page.locator("#add-to-cart-sauce-labs-backpack")
        this.cartIcon=page.locator(".shopping_cart_link")

    }
}

export default Product