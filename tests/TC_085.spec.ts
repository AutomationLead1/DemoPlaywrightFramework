import {test} from "@playwright/test"
import login from "../Pages/login.page"
import  AddUser  from '../Pages/adduserPage.page';
import path from "path";

test("adduser module",async({page})=>{
    let LoginPage=new login(page)
    let AddUserPage=new AddUser(page)


    await page.goto("http://103.182.211.220:5555/login")
    await LoginPage.login("admin@systemdesign.com","Admin@123")

    await AddUserPage.addUser( path.join(__dirname, "../uploadfiles/images.jpg"),
    "user1",
    "demo",
    "user1@gmail.com",
    "0000000000",
    "USER",
    "https://github.com/username",
    "name is user1")

  
})