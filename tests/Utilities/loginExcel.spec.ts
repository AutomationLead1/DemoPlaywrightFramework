import { test, expect } from "@playwright/test";
import {
    readExcel,
    getCellValue,
    writeExcel
} from "../../utils/excelUtility1";

test("Login using Excel data", async ({ page }) => {

    const data = await readExcel(
        "./test-data/LoginData.xlsx",
        "Login"
    );

    const username = await getCellValue(
        "./test-data/LoginData.xlsx",
        "Login",
        2,
        2
    );

    const password = await getCellValue(
        "C:/Users/rhutuja/Desktop/recordings/test-data/LoginData.xlsx",
        "Login",
        2,
        3
    );

    await page.goto(
        "https://practicetestautomation.com/practice-test-login/"
    );

    await page.getByLabel("Username").fill(username);
    await page.getByLabel("Password").fill(password);

    await page.getByRole("button", { name: "Submit" }).click();

    await expect(page).toHaveURL(
        /logged-in-successfully/
    );

    await writeExcel(
        "./test-data/LoginData.xlsx",
        "Login",
        2,
        3,
        "Pass"
    );
});