import { test } from "@playwright/test";
import { readExcel } from "../../utils/excelUtility1";

test("Read Excel Data", async () => {

    const data = await readExcel(
        "./test-data/LoginData.xlsx",
        "Login"
    );

    console.log(data);
});