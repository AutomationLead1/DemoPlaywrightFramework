import {test,expect} from "@playwright/test"

test("multiple_window_hanling",async({browser})=>{

    //open the browser
    let context=await browser.newContext()
    let page=await context.newPage()


    //enter the test url
    await page.goto("https://demoapps.qspiders.com/ui/browser?sublist=0")
    

    //click on "view more" button
    let [window2]=await Promise.all([
        page.waitForEvent('popup'),
        page.getByText("view more",{exact:true}).first().click()
    ])
   

    //click on "add to cart" button
    await window2.getByText('Add to Cart',{exact:true}).click()
   

    //validate the cart count
    let cartcount=await window2.locator('//article')
    let cart=parseInt(await cartcount.textContent() ||  "0")
    await expect(cart).toBeGreaterThan(0)
})