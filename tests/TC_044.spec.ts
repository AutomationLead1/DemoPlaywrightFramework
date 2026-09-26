import { test, expect } from '@playwright/test';

test('verify page title using poll assertion', async ({ page }) => {

    await page.goto('https://demoapps.qspiders.com/ui?scenario=1');

    await expect.poll(async () => {
        return await page.title();
    }).toContain('tilte');

});