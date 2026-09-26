import {test} from "@playwright/test"

test("Waitfor()",async({page})=>{
    //open the browser

    //enter the test URL
    await page.goto("https://www.amazon.in/")
    
    //Serach "shoes" in searchField
    await page.getByPlaceholder("Search Amazon.in",{exact:true}).fill("shoes")

    //capture all the suggestions
    await page.locator('.s-suggestion-container').first().waitFor({state:"visible",timeout:20000})
    let text=await page.locator('.s-suggestion-container').allTextContents()

    //print suggestion in output
    console.log(text);
    
  
    
})