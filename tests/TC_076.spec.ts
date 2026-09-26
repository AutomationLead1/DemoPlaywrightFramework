import {test} from "@playwright/test"
import excel from "exceljs"
import path from "path"


test("write data",async({page})=>{
    let book=new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../testdata/excelfile.xlsx")
    )
    let sheet=await book.getWorksheet(1)
    if(!sheet){
        sheet=await book.addWorksheet("Sheet5")
    }

    await page.goto("https://www.amazon.in/")
    await page.locator('input#twotabsearchtextbox').fill("shoes")
    await page.locator('//div[@class="s-suggestion-container"]').first().waitFor()
    let alldata=await page.locator('//div[@class="s-suggestion-container"]').allTextContents()
    console.log(alldata);
    for(let text of alldata){
         let c=alldata.indexOf(text)
        sheet.getRow(c+1).getCell(1).value=text
    }
    await book.xlsx.writeFile(path.join(__dirname,"../testdata/excelfile.xlsx"))
})





import ExcelJS from "exceljs";

const workbook = new ExcelJS.Workbook();
workbook.addWorksheet("Sheet1");
await workbook.xlsx.writeFile("Student.xlsx", {
    zip: {
        compression: "DEFLATE",
        compressionOptions: {
            level: 9
        }
    }
});
