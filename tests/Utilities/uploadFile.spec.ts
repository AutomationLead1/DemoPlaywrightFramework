import { test, expect } from "@playwright/test";
import path from "path";
import { uploadMultipleFiles} from "../../utils/playwrightUtility";

const singleFilePath = path.join(__dirname, "../../test-data/sample1.txt");
const secondFilePath = path.join(__dirname, "../../test-data/sample2.txt");

test("Upload a multiple file", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const multipleFileInput = page.locator('input[type="file"]').nth(1);

    await uploadMultipleFiles(
        multipleFileInput,
        [singleFilePath, secondFilePath]
    );
    await page.getByRole("button", { name: "Upload Multiple Files" }).click();
});