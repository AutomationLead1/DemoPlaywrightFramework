import {expect, test} from "@playwright/test"
let page;
test.beforeAll("Login",async({browser})=>{
    let context=await browser.newContext()
        let page=await context.newPage()
  await page.goto("https://demowebshop.tricentis.com/");
  await page.getByRole('link',{name:"Log in"}).click()
  await page.locator("#Email").fill("mpaditya55@gmail.com")
  await page.locator("#Password").fill("Aditya@8989")
  await page.locator('.button-1.login-button').click();
  await expect(page.locator("//a[.='mpaditya55@gmail.com']")).toBeVisible()

})

test.afterAll("Logout",async()=>{
    
    await page.getByRole('link',{name:"Log out"}).click();

})

test("Home Page Test",async()=>{
  
  const products=await page.locator(".product-title").all()
  await expect(products).toHaveLength(6)
  

})

test("Add a product to cart",async()=>{
  const products=await page.locator(".product-title").all()
  await page.locator(".product-title").first().click()
  await page.locator("#giftcard_2_RecipientName").fill("hgfugfuyfuy")
  await page.locator("#giftcard_2_RecipientEmail").fill("mpaditya55@gmail.com")
  await page.locator("#add-to-cart-button-2").click()
  
  
})