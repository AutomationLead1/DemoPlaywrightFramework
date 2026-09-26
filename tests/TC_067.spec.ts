import {test,expect} from "@playwright/test"
import path from "path"

test("upload multiple files",async({page})=>{
    //open the browser

    //enter the test url
    await page.goto("https://testautomationpractice.blogspot.com/")

    //upload multiple files
    // await page.locator("#multipleFilesInput").setInputFiles(['C:/Users/rhutuja/Desktop/Playwright_Typescript/uploadfiles/demo2.txt',
    // 'C:/Users/rhutuja/Desktop/Playwright_Typescript/uploadfiles/demo.txt'])

    // await page.locator("#multipleFilesInput").setInputFiles([path.join(__dirname,"../uploadfiles/demo.txt"),path.join(__dirname,"../uploadfiles/demo2.txt")])

    await page.locator("#multipleFilesInput").setInputFiles(["C:/Users/rhutuja/Desktop/upload/demo1.xlsx","C:/Users/rhutuja/Desktop/upload/demo3.txt"])
    await page.waitForTimeout(3000)

    await page.locator("#multipleFilesInput").setInputFiles([])
    

    await page.waitForTimeout(5000)

    //click "upload multiple file" button
    await page.getByRole("button",{name:"Upload Multiple Files"}).click()

    //validate files are uploaded
    await expect(page.locator('#multipleFilesStatus')).toContainText("Multiple files selected:")
})