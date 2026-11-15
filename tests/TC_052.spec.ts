import {test} from "@playwright/test"

test("waitforEvent",async({page})=>{
    //open the browser

    //enter the test URl
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")

    //fill text in download textfield
    await page.getByPlaceholder("Enter text here",{exact:true}).fill("downloading file")

    //click on download button
    let [downloadfile]=await Promise.all([
         page.waitForEvent("download"),
         page.getByRole("button",{name:"Download",exact:true}).click()
    ])


    //print the downloaded file path in output
    console.log(await downloadfile.path());
    

})

