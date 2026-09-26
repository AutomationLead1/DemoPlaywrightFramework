import {test} from "@playwright/test"

test("single_frame",async({page})=>{
    //open the browser

    //enter the test url
    await page.goto("https://ui.vision/demo/webtest/frames/")
 
    //fill "frame1" in frame1 textfield

    //!----approach 1-----
    // let frame1=await page.frameLocator('//frame[@src="frame_1.html"]')
    // await frame1.locator('//input[@name="mytext1"]').fill("frame1")


    //!----approach 2-----
    let frame1=await page.locator('//frame[@src="frame_1.html"]').contentFrame()
    await frame1.locator('//input[@name="mytext1"]').fill("frame1")
  
})