import { test } from '@playwright/test';

test.afterEach(async () => {
    console.log("Logout");
    console.log("Close Browser");
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