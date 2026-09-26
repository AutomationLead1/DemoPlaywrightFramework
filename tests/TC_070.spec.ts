import {test,expect} from "@playwright/test"

test("confirm alert",async({page})=>{
   
    await page.goto("https://testautomationpractice.blogspot.com/")

    page.once("dialog",async(dialog)=>{
        await dialog.accept()
        console.log(await dialog.message()); 
    })

    await page.getByRole("button",{name:"Confirmation Alert"}).click()
    await page.getByRole("button",{name:"Confirmation Alert"}).click()

    await expect(page.locator("#demo")).toContainText("OK")
   
})