import { test, expect } from '@playwright/test';

test('Verify application details', async ({ page }) => {

    await page.goto('https://demoapps.qspiders.com/ui?scenario=1');

    // 1. Verify the page title
    await expect(page).toHaveTitle('DemoApps | Qspiders | Text Box');

    // 2. Verify the current URL
    await expect(page).toHaveURL('https://demoapps.qspiders.com/ui?scenario=1');

    // 3. Verify the name textbox value
    await page.locator('#name').fill('username');
    await expect(page.locator('#name')).toHaveValue('usere');

});