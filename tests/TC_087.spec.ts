import {test,expect} from "@playwright/test"
import login from "../Pages/e2e/LoginPage.page"
import Cart from "../Pages/e2e/CartPage.page"
import Product from "../Pages/e2e/ProductPage.page"
import checkout from "../Pages/e2e/CheckOutPage.page"
import data from "../testdata/e2e.json"

for(let testdata of data){
    test(`${testdata.firstname}`,async({page})=>{
        let LoginPage=new login(page)
        let productPage=new Product(page)
        let cartPage=new Cart(page)
        let CheckoutPage=new checkout(page)

        //navigate to the application
        await page.goto("https://www.saucedemo.com/")

        //fill username is username TF
        await LoginPage.txtUsername.fill(testdata.username)

        //fill password in passwordTF
        await LoginPage.txtPassword.fill(testdata.password)

        //click on Login Btn
        await LoginPage.BtnLogin.click()

        //click on the add to cart Btn of 1st product
        await productPage.addTocartBTN.click()

        //click on cart icon
        await productPage.cartIcon.click()

        //click on checkout Btn
        await cartPage.Btncheckout.click()

        //fill first name is firstname Tf
        await CheckoutPage.txtFirstName.fill(testdata.firstname)

        //fill lastname is lastname TF
        await CheckoutPage.txtLastName.fill(testdata.Lastname)

        //fill zipcode in zipcode Tf
        await CheckoutPage.txtZipCode.fill(testdata.zipcode)

        //click continue bTN
        await CheckoutPage.BTncontinue.click()

        //click on finish BTn
        await CheckoutPage.BtnFinish.click()

        //validate the order is placed
        await expect(CheckoutPage.confirmMessage).toContainText(testdata.confirmmessage)

        await page.waitForTimeout(3000)


    })
}