import {test,expect} from "@playwright/test"
import excel from "exceljs"
import path from "path"

test.only("for application", async ({ page }) => {
    let book = new excel.Workbook();
    await book.xlsx.readFile(
        path.join(__dirname, "../testdata/excelfile.xlsx")
    );
    let sheet = book.getWorksheet("Sheet3");
    let alldata: any[] = [];
    let header = sheet!.getRow(1).values as string[];
    for (let r = 2; r <= sheet!.actualRowCount; r++) {
        let row = sheet!.getRow(r);
        alldata.push({
            link: row.getCell(header.indexOf("URL")).toString(),
            user: row.getCell(header.indexOf("username")).toString(),
            password: row.getCell(header.indexOf("password")).toString(),
            assertion: row.getCell(header.indexOf("assertion")).toString()
        });
    }
    console.log(alldata);
    for(let data of alldata){
        await page.goto(data.link)
        await page.getByLabel('Username').fill(data.user)
        await page.getByLabel("Password").fill(data.password)
        await page.getByRole("button",{name:"Submit"}).click()
        await expect.soft(page.locator('.post-title')).toContainText(data.assertion)
    }


})