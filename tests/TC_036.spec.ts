import { test, expect } from '@playwright/test';

test('Verify name textbox is visible', async ({ page }) => {
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1');

    // Auto-retrying assertion
    await expect(page.locator('#idnamename')).toBeVisible();
    await page.locator("#name").fill("username")
});