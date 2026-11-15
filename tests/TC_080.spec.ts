import {test,expect} from "@playwright/test"
import data from "C:/Users/rhutuja/Desktop/Playwright_Typescript/testdata/TC_080.json"

test("JSON application",async({page})=>{
    await page.goto(data.url)
    await page.getByLabel("Username").fill(data.username)
    await page.getByLabel("Password").fill(data.password)
    await page.getByRole("button",{name:"Submit"}).click()
    await expect(page.locator(".post-title")).toContainText(data.assertion)
})