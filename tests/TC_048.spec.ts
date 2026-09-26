import {test} from "@playwright/test"

test("WaitforSelector()",async({page})=>{
    //open the browser

    //enter the test URL
    await page.goto('https://www.amazon.in/')
    
    //Serach "shoes" in searchField
    await page.getByPlaceholder('Search Amazon.in',{exact:true}).fill("shoes")

    //capture all the suggestions
    await page.waitForSelector('.s-suggestion-container')
    let text=await page.locator('.s-suggestion-container').allTextContents()

    //print suggestion in output
    console.log(text);
})