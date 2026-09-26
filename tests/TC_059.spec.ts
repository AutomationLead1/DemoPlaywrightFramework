 import {test,expect} from "@playwright/test"

test("multiple_window_handling",async({browser})=>{

    //open the browser
    let context=await browser.newContext()
    let page=await context.newPage()

    //enter the test url
    await page.goto("https://demoapps.qspiders.com/ui/browser/multipleWindow?sublist=2")

    //click on "Shop Now" button
    let [Window1,Window2,Window3]=await Promise.all([
        context.waitForEvent("page"),
        context.waitForEvent("page"),
        context.waitForEvent("page"),
        page.getByRole("button",{name:"Shop Now"}).click()

    ])
    await Window1.waitForLoadState()
    await Window2.waitForLoadState()
    await Window3.waitForLoadState()

    //Print title of all tabs
    let windows=await context.pages()

    for(let window of windows){
        console.log(await window.title());
    
    }

    //click on "Add to Cart" button in Window 1
    await windows[1].getByRole("button",{name:"Add to Cart"}).click()
    let cart=await windows[1].locator("//article")
    let cartcount1=parseInt(await cart.textContent() || "0")
    await expect(cartcount1).toBeGreaterThan(0)

    //click on "Add to Cart" button in Window 2
    await windows[2].getByRole("button",{name:"Add to Cart"}).click()
    let cart2=await windows[1].locator("//article")
    let cartcount2=parseInt(await cart2.textContent() || "0")
    await expect(cartcount2).toBeGreaterThan(0)

    //click on "Add to Cart" button in Window 3
    await windows[3].getByRole("button",{name:"Add to Cart"}).click()
    let cart3=await windows[1].locator("//article")
    let cartcount3=parseInt(await cart3.textContent() || "0")
    await expect(cartcount3).toBeGreaterThan(0)

    //Validate the Cart count in all Window

})