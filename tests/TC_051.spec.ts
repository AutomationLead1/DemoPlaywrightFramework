import {test} from "@playwright/test"

test("wait for loadstate",async({page})=>{
    //open the browser
    //enter the test URL
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
  
    //click on cart button
    await Promise.all([
        page.waitForURL("**/checkbox*"),
        page.getByText('Check Box').click()
    ])

    await page.waitForLoadState("load")

    //capture the new page URL
    let url=await page.url()
    console.log(url);

})