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
