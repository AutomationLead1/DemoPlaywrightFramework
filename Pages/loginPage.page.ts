import { Page, Locator } from '@playwright/test';
class loginPage{
    page:Page
    txtusername:Locator
    txtpassword:Locator
    BtnSubmit:Locator
    textLoggedIn:Locator

    constructor(page:Page){
        this.page=page
        this.txtusername=page.locator("input#username")
        this.txtpassword=page.locator("input#password")
        this.BtnSubmit=page.locator("button#submit")
        this.textLoggedIn=page.locator(".post-title")
    }
    async login(username:string,password:string){
        await this.txtusername.fill(username)
        await this.txtpassword.fill(password)
        await this.BtnSubmit.click()

    }
}
export default loginPage