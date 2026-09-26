import { expect, test } from '@playwright/test';

test.beforeAll(async () => {
    console.log("Read Excel Test Data");
    console.log("Connect to Database");
    console.log("Generate Test Data");
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