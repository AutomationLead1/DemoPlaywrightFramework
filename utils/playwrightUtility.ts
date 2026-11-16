import {Page,expect,Locator} from "@playwright/test"

export async function verifyTitleAndURL(
    page:Page,
    expectedTitle:string | RegExp,
    expectedURL:string |RegExp 
){
    await expect(page).toHaveTitle(expectedTitle);
    await expect(page).toHaveURL(expectedURL);
}
export async function uploadSingleFile(
    fileInput: Locator,
    filePath: string
): Promise<void> {
    await fileInput.setInputFiles(filePath);
}

// Upload multiple files
export async function uploadMultipleFiles(
    fileInput: Locator,
    filePaths: string[]
): Promise<void> {
    await fileInput.setInputFiles(filePaths);
}


export function handleDialog(
    page: Page,
    confirmAction: "accept" | "dismiss" = "accept",
    promptText?: string
): void {

    page.once("dialog", async (dialog) => {

        console.log(dialog.type(), dialog.message());

        if (dialog.type() === "alert") {
            await dialog.accept();
        }
        else if (dialog.type() === "confirm") {
            await (confirmAction === "accept" ? dialog.accept() : dialog.dismiss());
        }
        else {
            await (promptText !== undefined ? dialog.accept(promptText) : dialog.dismiss());
        }

    });
}