import {test,expect} from "@playwright/test"
import path from "path"
import fs from "fs" //! file system

test("download file",async({page})=>{
    //open the browser

    //enter the test url
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")

    //fill text in download textfield
    await page.locator('#writeArea').fill("hii playwright")

    //click "download" button
    let [downloadfile]=await Promise.all([
        page.waitForEvent("download"),
        page.locator('#downloadButton').click()
    ])

    console.log(await downloadfile.path());
    console.log(await downloadfile.suggestedFilename());

    let downloadfolder="C:/Users/rhutuja/Desktop/bills/downloadsss"

    let filename=await downloadfile.suggestedFilename()

    await downloadfile.saveAs(path.join(downloadfolder,filename))
    
    let filepath=path.join(downloadfolder,filename)

    //validate file is downloaded
    let data=await fs.readFileSync(filepath,"utf-8")
    await expect(data).toContain("playwright")




})