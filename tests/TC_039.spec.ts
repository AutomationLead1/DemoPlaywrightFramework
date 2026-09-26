import { test, expect } from '@playwright/test';

test('Verify registration page details', async ({ page }) => {

    await page.goto('https://demoapps.qspiders.com/ui?scenario=1');

    const title = await page.title();

    const url = page.url();

    const heading = await page.locator('h1').textContent();

    // Non-retrying assertions
    expect(title).toContain('Demoapps');

    expect(url).toMatch(/scenario=1/);

    expect(heading).toEqual('Register');

});