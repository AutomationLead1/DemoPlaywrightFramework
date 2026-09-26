import {test,expect} from "@playwright/test"

test("prompt alert",async({page})=>{
   
    await page.goto("https://testautomationpractice.blogspot.com/")

    page.once("dialog",async(dialog)=>{
        await dialog.accept("tom")
        console.log(await dialog.defaultValue());
        console.log(await dialog.message()); 
    })

    await page.getByRole("button",{name:"Prompt Alert"}).click()

    await expect(page.locator("#demo")).toContainText("How are you today?")
   
})