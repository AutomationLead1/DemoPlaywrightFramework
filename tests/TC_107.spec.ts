import { test } from '@playwright/test';

test.beforeEach(async () => {
    console.log("Launch Browser");
    console.log("Open Application");
    console.log("Login");
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