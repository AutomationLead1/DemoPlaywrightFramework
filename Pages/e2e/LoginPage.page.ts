import { Locator,Page } from "@playwright/test";

class login{
    page:Page
    txtUsername:Locator
    txtPassword:Locator
    BtnLogin:Locator

    constructor(page:Page){
        this.page=page
        this.txtUsername=page.locator("#user-name")
        this.txtPassword=page.locator("#password")
        this.BtnLogin=page.locator("#login-button")

    }
}

export default login