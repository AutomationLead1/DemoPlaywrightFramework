import {test,expect} from "@playwright/test"
import data from "C:/Users/rhutuja/Desktop/Playwright_Typescript/testdata/TC_078.json"

test.only("single set",async({page})=>{
    console.log(data.language.playwright);
    console.log(data.language.selenium);  

})