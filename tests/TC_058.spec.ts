import {test,expect} from "@playwright/test"

test("multiple_tabs_handling",async({browser})=>{
     //open the browser
    let context=await browser.newContext()
    let page=await context.newPage()

    //enter the test url
    await page.goto("https://demoapps.qspiders.com/ui/browser/multipleTabs?sublist=3")

    //click on "Shop Now" button
    let [tab1,tab2,tab3]=await Promise.all([
        context.waitForEvent("page"),
        context.waitForEvent("page"),
        context.waitForEvent("page"),
        page.getByRole("button",{name:"Shop Now"}).click()

    ])

    await tab1.waitForLoadState()
    await tab2.waitForLoadState()
    await tab3.waitForLoadState()


    //Print title of all tabs
    let pages=await context.pages()

    for(let page of pages){
        console.log(await page.title());
        
    }

    //click on "Add to Cart" button in Page 1
    await pages[1].getByRole("button",{name:"Add to Cart"}).click()
    let cart1=await pages[1].locator("//article")
    let cartcount1=parseInt(await cart1.textContent() || "0")
    await expect(cartcount1).toBeGreaterThan(0)

    //click on "Add to Cart" button in Page 2
    await pages[2].getByRole("button",{name:"Add to Cart"}).click()
    let cart2=await pages[1].locator("//article")
    let cartcount2=parseInt(await cart2.textContent() || "0")
    await expect(cartcount2).toBeGreaterThan(0)
 
    //click on "Add to Cart" button in Page 3
    await pages[3].getByRole("button",{name:"Add to Cart"}).click()
    let cart3=await pages[1].locator("//article")
    let cartcount3=parseInt(await cart3.textContent() || "0")
    await expect(cartcount3).toBeGreaterThan(0)

    //Validate the Cart count in all pages

})