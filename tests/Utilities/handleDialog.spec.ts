import {test} from "@playwright/test"
import { handleDialog } from "../../utils/playwrightUtility";

test("Handle all types of dialogs", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    handleDialog(page);
    await page.getByRole("button", { name: "Simple Alert" }).click();

    handleDialog(page, "accept");
    await page.getByRole("button", { name: "Confirmation Alert" }).click();

    handleDialog(page, "dismiss");
    await page.getByRole("button", { name: "Confirmation Alert" }).click();

    handleDialog(page, "accept", "Rhutuja");
    await page.getByRole("button", { name: "Prompt Alert" }).click();
});
