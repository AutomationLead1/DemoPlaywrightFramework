import { Locator, Page } from "@playwright/test";

class login{
    page:Page
    txtEmailId:Locator
    txtPassword:Locator
    BtnSignIn:Locator

    constructor(page:Page){
        this.page=page
        this.txtEmailId= page.locator('#emailId')
        this.txtPassword=page.locator('#password')
        this.BtnSignIn=page.locator('#signInButton')
    }
    async login(email: string, password: string) {
        await this.txtEmailId.fill(email)
        await this.txtPassword.fill(password)
        await this.BtnSignIn.click()
    }
}
export default login