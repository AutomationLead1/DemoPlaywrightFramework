import {test,expect} from "@playwright/test"
import path from "path"

test("upload multiple files",async({page})=>{
    //open the browser

    //enter the test url
    await page.goto("https://testautomationpractice.blogspot.com/")
   
    //upload multiple files
    // await page.locator('#multipleFilesInput').setInputFiles(["C:/Users/rhutuja/Desktop/Playwright_Typescript/uploadss/demo.txt","C:/Users/rhutuja/Desktop/Playwright_Typescript/uploadss/demo1.txt"])

    // await page.locator('#multipleFilesInput').setInputFiles([path.join(__dirname,"../uploadss/demo.txt"),path.join(__dirname,"../uploadss/demo1.txt")])

    await page.locator('#multipleFilesInput').setInputFiles(["C:/Users/rhutuja/Desktop/bills/Receipt_02May2026_191259 .pdf","C:/Users/rhutuja/Desktop/bills/Receipt_12Feb2026_070302.pdf","C:/Users/rhutuja/Desktop/bills/Receipt_27May2026_114716.pdf"])


    await page.locator('#multipleFilesInput').setInputFiles([])   

    //click "upload multiple file" button
    await page.getByRole("button",{name:"Upload Multiple Files"}).click()

    //validate files are uploaded
    await expect(page.locator('#multipleFilesStatus')).toContainText("Multiple files selected: ")
 
})