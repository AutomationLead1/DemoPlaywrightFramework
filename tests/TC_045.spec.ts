import {test} from '@playwright/test'

test.use(
    {
        actionTimeout:15000
    }
)

test("Auto_waits",async({page})=>{
    page.setDefaultTimeout(20000)
    //open the browser

    //enter the test URL
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
 
    //fill username textfield
    await page.getByPlaceholder("Enter your lastname",{exact:true}).fill("user",{timeout:25000})

    //fill email textfield
    await page.getByPlaceholder("Enter Your Email",{exact:true}).fill("user@gmail.com")

    //fill password textfield
    await page.getByPlaceholder("Enter your password",{exact:true}).fill("user123")

    //click on register button
    await page.getByRole("button",{name:"Register",exact:true}).click()
})

test("Auto_waits1",async({page})=>{
    // page.setDefaultTimeout(20000)
    //open the browser

    //enter the test URL
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
 
    //fill username textfield
    await page.getByPlaceholder("Enter your lastname",{exact:true}).fill("user")

    //fill email textfield
    await page.getByPlaceholder("Enter Your Email",{exact:true}).fill("user@gmail.com")

    //fill password textfield
    await page.getByPlaceholder("Enter your password",{exact:true}).fill("user123")

    //click on register button
    await page.getByRole("button",{name:"Register",exact:true}).click()
})