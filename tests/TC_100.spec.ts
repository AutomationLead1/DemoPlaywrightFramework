import {test} from "@playwright/test"

test("testscript 1",async()=>{
    console.log("Executing testscript 1");
    
})

test("testscript 2",async()=>{
    console.log("Executing testscript 2");
    
})

test.skip("testscript 3",async()=>{
    console.log("Executing testscript 3");
    
})