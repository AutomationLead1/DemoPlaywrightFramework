import { test } from "@playwright/test";
import { writeExcel } from "../../utils/excelUtility1";

test("Write Excel Data", async () => {

    await writeExcel(
        "./test-data/LoginData.xlsx",
        "Login",
        1,
        3,
        "Password123"
    );

});