import { test, expect } from '@playwright/test';

test('Asymmetric Matcher', async ({ page }) => {

    await page.goto('https://demoapps.qspiders.com/ui?scenario=1');

    const buttonText = await page.locator('button').textContent();

    expect(buttonText).toEqual(
        expect.stringContaining('Login')
    );

});