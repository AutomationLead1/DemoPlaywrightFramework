import {test} from "@playwright/test"

test("wait for navigation",async({page})=>{
    //open the browser

    //enter the test URL
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
   
    //click on "checkbox" link
    await Promise.all([
         page.waitForNavigation(),
         page.getByText("Check Box",{exact:true}).click()

    ])

    let result=await Promise.all([
        page.waitForURL("**/checkbox*"),
        page.getByText('Check Box').click()
    ])

    

    //capture the new page URL
    let pageUrl=await page.url()
    console.log(pageUrl);
    

})