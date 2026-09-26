import {test,expect} from "@playwright/test"

test('authentication',async({browser})=>{
    //open the browser
    let context=await browser.newContext({
        httpCredentials:{
            username:"admin",
            password:"admin"
        }
    })
    let page=await context.newPage()

    //enter the test url
    await page.goto("https://basic-auth-git-main-shashis-projects-4fa03ca5.vercel.app")

    await page.waitForTimeout(3000)

    //handle the authentication popup

    //verify authentication popup is handled
    await expect(page.locator('p')).toHaveText('congratulations with valid credentials')

})