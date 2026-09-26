import { Locator,Page } from "@playwright/test";

class checkout{
    page:Page
    txtFirstName:Locator
    txtLastName:Locator
    txtZipCode:Locator
    BTncontinue:Locator
    BtnFinish:Locator
    confirmMessage:Locator

    constructor(page:Page){
        this.page=page
        this.txtFirstName=page.locator("#first-name")
        this.txtLastName=page.locator("#last-name")
        this.txtZipCode=page.locator("#postal-code")
        this.BTncontinue=page.locator("#continue")
        this.BtnFinish=page.locator("#finish")
        this.confirmMessage=page.locator(".complete-header")

    }
}

export default checkout