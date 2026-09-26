import {test} from "@playwright/test"

test("Login Test",async({browserName})=>{
    test.skip(browserName=== "firefox")
    console.log("Executing Login Test");
    
})