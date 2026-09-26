import {test} from "@playwright/test"

test("nested_frame",async({page})=>{

    //open the browser

    //enter the test url
    await page.goto("https://ui.vision/demo/webtest/frames/")

    //click "I am a human" radio button
    let frame3=await page.frameLocator('//frame[@src="frame_3.html"]')
    let iframe=await frame3.frameLocator("//iframe")
    await iframe.locator('#i9').click()
})