import { test, expect } from "@playwright/test";
import { verifyTitleAndURL } from "../../utils/playwrightUtility";

const homeURL = "https://testautomationpractice.blogspot.com/";

test("Verify page title and URL", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await verifyTitleAndURL(page, "Automation Testing Practice",homeURL);
    
});