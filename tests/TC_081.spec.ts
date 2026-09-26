import {test,expect} from "@playwright/test"
import data from "C:/Users/rhutuja/Desktop/Playwright_Typescript/testdata/TC_0812.json"

test("multiple sets",async({page})=>{

    for(let testdata of data.invalid){
        let url=testdata.url
        let username=testdata.username
        let password=testdata.password
        let assertion=testdata.assertion

        await page.goto(url)
        await page.locator("input#username").fill(username)
        await page.locator("input#password").fill(password)
        await page.getByRole('button',{name:"Submit"}).click()
        await expect(page.locator(".post-title")).toContainText(assertion)
    }
})