import {test,expect} from "@playwright/test"
import data from "C:/Users/rhutuja/Desktop/Playwright_Typescript/testdata/TC_080.json"

test("JSON application",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.getByLabel("Username").fill("student")
 
    await page.getByLabel("Password").fill("Password123")
    await page.waitForTimeout(3000)

    await page.getByRole('button',{name:"Submit"}).click()
    await expect(page.locator(".post-title")).toContainText("Logged In Successfully")
})