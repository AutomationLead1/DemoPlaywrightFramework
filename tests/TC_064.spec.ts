import {test,expect} from "@playwright/test"

test("notification permission",async({browser})=>{

    //open the browser
    let context=await browser.newContext({
        permissions:['notifications']
    })
    let page=await context.newPage()

    //enter the URL
    await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")

    //click on "notification" button
    await page.locator('#browNotButton').click()

    //handle the notification permission

    
    //validate the notification is granted
    let permission=await page.evaluate(()=>{
        return Notification.permission

    })
    console.log(permission);
    await expect(permission).toBe("granted")

    

})