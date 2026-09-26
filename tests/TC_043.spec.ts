import { test, expect } from '@playwright/test';

test('Asymmetric Matcher - expect.anything()', async ({ page }) => {

    await page.goto('https://demoapps.qspiders.com/ui?scenario=1');

    const text = await page.locator('button').textContent();

    expect(text).toEqual(expect.anything());

});