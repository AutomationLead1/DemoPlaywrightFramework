import {test} from "@playwright/test"

test("custom waits",async({page})=>{
    //open the browser

    //enter the test url
    await page.goto("https://www.amazon.in/")

    //wait until page is loaded
    await page.waitForFunction(()=>{
        return document.readyState ==='complete'
    })

    //fill "shoes" in searchfield
    await page.getByPlaceholder("Search Amazon.in",{exact:true}).fill("shoes")

    //wait till atleast 1 suggestion is loaded
    await page.waitForFunction(()=>{
         let ele=document.querySelectorAll('.s-suggestion-container')
         return ele.length> 1
    })
})