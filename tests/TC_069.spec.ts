import {test} from "@playwright/test"

test("simple alert",async({page})=>{
   
    await page.goto("https://testautomationpractice.blogspot.com/")

    page.once("dialog",async(dialog)=>{
        await dialog.accept()
        console.log(await dialog.message()); 
    })

    await page.getByRole("button",{name:"Simple Alert"}).click()
   
})