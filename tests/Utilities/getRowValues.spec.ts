import { test } from '@playwright/test';
import { getRowValues } from '../../utils/excelUtility1';


test('Login using Excel data', async ({ page }) => {

    const rowData = await getRowValues(
        "./test-data/LoginData.xlsx",
        "Login",
        2
    );

    console.log(rowData);
    
});