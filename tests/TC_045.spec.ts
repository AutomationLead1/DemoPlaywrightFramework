import {test} from '@playwright/test'

test("Auto_waits",async({page})=>{
    await page.setDefaultTimeout(10000)
    //open the browser

    //enter the test URL
    await page.goto("https://demoapps.qspiders.com/ui")

    //fill username textfield
    await page.getByLabel("Namehbdchbd",{exact:true}).fill("username",{timeout:5000})

    //fill email textfield
    await page.getByLabel('Email Id',{exact:true}).fill("username@gmail.com")

    //fill password textfield
    await page.getByLabel('Password',{exact:true}).fill("username123")

    //click on register button
    await page.getByRole('button',{name:"Register"}).click()
})