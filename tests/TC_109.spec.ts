import { test } from '@playwright/test';

test.afterAll(async () => {
    console.log("Disconnect Database");
    console.log("Delete Temporary Test Data");
    console.log("Generate HTML Report");
});

test("Add User", async () => {
    console.log("Add User");
});

test("Edit User", async () => {
    console.log("Edit User");
});

test("Delete User", async () => {
    console.log("Delete User");
});


test.describe("demo",()=>{
    test("t1",async()=>{

    })
    test("t2",async()=>{
        
    })
    test("t3",async()=>{
        
    })
})