import {test} from "@playwright/test"
import data from "C:/Users/rhutuja/Desktop/Playwright_Typescript/testdata/TC_079.json"

test("multiple set",async({page})=>{
   data.forEach(d=>{
       
      console.log(d.language);      
   })
})