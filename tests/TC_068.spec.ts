import {test,expect} from "@playwright/test"
import path from "path"
import fs from "fs"

test("download file",async({page})=>{
    //open the browser

    //enter the test url
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")

    //fill text in download textfield
    await page.locator('#writeArea').fill("i m downloading file")
    await page.locator('#fileName').fill('newfile.txt')
   

    //click "download" button
   let [downloadfile]= await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button',{name:"Download"}).click()

    ])
    let downloadfilepath="C:/Users/rhutuja/Desktop/downloadfile"

    let downfilepath2="../downloadss"

    let filename=await downloadfile.suggestedFilename()

    await downloadfile.saveAs(path.join(downloadfilepath,filename))
    // await downloadfile.saveAs(downloadfile.suggestedFilename())

    // console.log(await downloadfile.path());
    // console.log(await downloadfile.suggestedFilename());

    let filepath=path.join(downloadfilepath,filename)
    
    

    
    //validate file is downloaded
    let data=await fs.readFileSync(filepath,'utf-8')
    await expect(data).toContain("i m downloading file")



})