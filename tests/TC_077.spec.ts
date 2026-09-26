import {test} from "@playwright/test"
// import fs from "fs"  
// import path from "path"
// let datafile=fs.readFileSync(path.join(__dirname,"../testdata/TC_077.json"),"utf-8")
// let data=JSON.parse(datafile)

 import data from "C:/Users/rhutuja/Desktop/Playwright_Typescript/testdata/TC_077.json"

test.only("single set",async({page})=>{
    console.log(data.language);  
})