import {test} from "@playwright/test"
import login from "../Pages/login.page.ts"

test("login module",async({page})=>{
    let LoginPage=new login(page)
    await page.goto("http://103.182.211.220:5555/login")
    await LoginPage.login("admin@systemdesign.com","Admin@123")

})