import {test} from "@playwright/test"

test("Multiple_frames",async({page})=>{

    //open the browser

    //enter the test url
    await page.goto("https://ui.vision/demo/webtest/frames/")

    //fill "frame1" in frame 1 textfield
    let frame1=await page.frameLocator('//frame[@src="frame_1.html"]')
    await frame1.locator('//input[@name="mytext1"]').fill("frame1")

    //fill "frame2" in frame 2 textfield
    let frame2=await page.frameLocator('//frame[@src="frame_2.html"]')
    await frame2.locator('//input[@name="mytext2"]').fill("frame2")

    //fill "frame3" in frame 3 textfield
    let frame3=await page.frameLocator('//frame[@src="frame_3.html"]')
    await frame3.locator('//input[@name="mytext3"]').fill("frame3")

    //fill "frame4" in frame 4 textfield
    let frame4=await page.frameLocator('//frame[@src="frame_4.html"]')
    await frame4.locator('//input[@name="mytext4"]').fill("frame4")

})