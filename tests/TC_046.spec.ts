import {test} from "@playwright/test"

test("hard_coded_waits",async({page})=>{
    //open the browser
    
    //enter the test URL
    await page.goto("https://demoapps.qspiders.com/ui")

    //fill username textfield
    await page.getByPlaceholder('Enter your name',{exact:true}).fill("username")
    await page.waitForTimeout(2000)

    //fill email textfield
    await page.getByPlaceholder("Enter Your Email",{exact:true}).fill("username@gmail.com")
    await page.waitForTimeout(2000)

    //fill password textfield
    await page.getByPlaceholder("Enter your password",{exact:true}).fill("user123")
    await page.waitForTimeout(5000)

    //click on register button
    await page.getByRole("button",{name:"Register"}).click()
    await page.waitForTimeout(7000)

})