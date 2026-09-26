import {test,expect} from "@playwright/test"
import excel from "exceljs"
import path from "path"

test("read single data",async({page})=>{
    let book=new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../testdata/excelfile.xlsx"))
    let sheet=await book.getWorksheet("Sheet2")
    let data=await sheet!.getRow(1).getCell(1).toString() 
    console.log(data);
    
})
test.only("for application", async ({ page }) => {
    let book = new excel.Workbook();
    await book.xlsx.readFile(
        path.join(__dirname, "../testdata/excelfile.xlsx")
    );
    let sheet = book.getWorksheet("Sheet1");
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
    for (let data of alldata) {
        await page.goto();
        await page.getByLabel("Username").fill();
        await page.getByLabel("Password").fill();
        await page.getByRole("button", {
            name: "Submit"
        }).click();
        await expect(page.locator()).toContainText()
    }
})