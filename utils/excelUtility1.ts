import ExcelJS from "exceljs";

export async function readExcel(
    filePath: string,
    sheetName: string
): Promise<any[][]> {

    const workbook = new ExcelJS.Workbook();

    await workbook.xlsx.readFile(filePath);

    const worksheet = workbook.getWorksheet(sheetName);

    const data: any[][] = [];

    worksheet!.eachRow((row) => {

        const rowData: any[] = [];

        row.eachCell((cell) => {
            rowData.push(cell.value);
        });

        data.push(rowData);
    });

    return data;
}


export async function getCellValue(
    filePath: string,
    sheetName: string,
    row: number,
    column: number
) :Promise<string>{

    const workbook = new ExcelJS.Workbook();

    await workbook.xlsx.readFile(filePath);

    const worksheet = workbook.getWorksheet(sheetName);

    const value=worksheet!.getCell(row, column).value;
    return String(value ?? "")
}


export async function writeExcel(
    filePath: string,
    sheetName: string,
    row: number,
    column: number,
    value: any
) {

    const workbook = new ExcelJS.Workbook();

    await workbook.xlsx.readFile(filePath);

    const worksheet = workbook.getWorksheet(sheetName);

    if (!worksheet) {
        throw new Error(`Sheet "${sheetName}" not found`);
    }

    worksheet.getCell(row, column).value = value;

    await workbook.xlsx.writeFile(filePath);
}



export async function getRowValues(
    filePath: string,
    sheetName: string,
    rowNumber: number
): Promise<any[]>{

    const workbook = new ExcelJS.Workbook();

    await workbook.xlsx.readFile(filePath);

    const worksheet = workbook.getWorksheet(sheetName);

    const row = worksheet!.getRow(rowNumber);

    const rowData: any[] = [];

    row.eachCell((cell) => {
        rowData.push(cell.value);
    });

    return rowData;
}