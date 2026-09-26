import { test } from "@playwright/test";
import { getCellValue } from "../../utils/excelUtility1";

test("Get Cell Value", async () => {

    const username = await getCellValue(
        "./test-data/LoginData.xlsx",
        "Login",
        2,
        2
    );

    console.log(username);
});