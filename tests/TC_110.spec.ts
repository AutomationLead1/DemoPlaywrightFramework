import { test } from "@playwright/test";

test("Login Test", async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.getByLabel("Username").fill("student");
    await page.getByLabel("Password").fill("Password123");
    await page.getByRole("button", { name: "Submit" }).click();
});