import {test,expect} from "@playwright/test"

test("assertion_demo",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")
     await page.getByText("Yes",{exact:true}).click()
     let expectedResult='You selected "Yes"'
    let actualResult=await page.getByText('You selected "no"',{exact:true}).textContent()
      
     await expect(page.getByText(`${actualResult}`,{exact:true})).toContainText(`${expectedResult}`)
})