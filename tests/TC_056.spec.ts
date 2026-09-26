import {test,expect} from "@playwright/test"

test("multiple_tab_handling",async({browser})=>{

    //open the browser
    let context=await browser.newContext()
    let page=await context.newPage()
    //enter the test url
    await page.goto("https://demoapps.qspiders.com/ui/browser/newTab?sublist=1")

    //click on "view more" button
    let [page2]=await Promise.all([
        page.waitForEvent("popup"),
        page.getByText('view more',{exact:true}).first().click()
        
    ]);
    

    //click on "add to cart" button
    await page2.getByText('Add to Cart',{exact:true}).click();

    //validate cart count 
    let cart=await page2.locator('//article')
    let cartcount=parseInt(await cart.textContent() || "0")
    await expect(cartcount).toBeGreaterThan(0)
})