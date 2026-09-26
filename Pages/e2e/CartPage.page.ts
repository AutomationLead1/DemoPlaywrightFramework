import { Locator,Page } from "@playwright/test";

class Cart{
    page:Page
    Btncheckout:Locator

    constructor(page:Page){
        this.page=page
        this.Btncheckout=page.locator("#checkout")

    }
}
export default Cart