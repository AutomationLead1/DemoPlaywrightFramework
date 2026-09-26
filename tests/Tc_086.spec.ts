import {test,expect} from "@playwright/test"
import login from "../Pages/loginPage.page"
import data from "../testdata/logindata.json"

test("login module",async({page})=>{
    let loginPage=new login(page)

    for(let d of data){
        await page.goto("https://practicetestautomation.com/practice-test-login/")
        await loginPage.login(d.username,d.password)
        await expect(loginPage.textLoggedIn).toContainText(d.assertion)
        await page.waitForTimeout(3000)
    }

})