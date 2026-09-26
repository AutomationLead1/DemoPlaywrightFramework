import {test} from "@playwright/test"

test("testscript 1",async()=>{
    console.log("Executing testscript 1");
    
})

test("testscript 2",async()=>{
    console.log("Executing testscript 2");
    
})

test("testscript 3",async()=>{
    test.slow()
    console.log("Executing testscript 3");
    
})