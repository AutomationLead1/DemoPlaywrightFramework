import {test,expect} from "@playwright/test"
import path from "path"

test("upload singlefile",async({page})=>{
    //open the browser
  console.log(__dirname);
  
    
    //enter the test url
    await page.goto("https://testautomationpractice.blogspot.com/")

    //upload single file
    // await page.locator('#singleFileInput').setInputFiles("C:/Users/rhutuja/Desktop/Playwright_Typescript/uploadfiles/demo.txt")

    // await page.locator('#singleFileInput').setInputFiles(path.join(__dirname,"../uploadfiles/demo.txt"))

    await page.locator('#singleFileInput').setInputFiles("C:/Users/rhutuja/Desktop/upload/demo1.xlsx")
    
    await page.locator('#singleFileInput').setInputFiles([])


   

    await page.waitForTimeout(3000)

    //click "upload single file" button
    await page.getByRole("button",{name:"Upload Single File"}).click()

    //Validate file is uploaded
    await expect(page.locator('#singleFileStatus')).toContainText('Single file selected')
})