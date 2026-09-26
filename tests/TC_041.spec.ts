import { test, expect } from '@playwright/test';

test('Negative Assertion Demo', async ({ page }) => {

  await page.goto( 'https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2');

  await page.locator('#btn_b').dblclick();

  await expect(page.getByText('You selected "No"', { exact: true })).not.toBeVisible();

});