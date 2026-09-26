// import { test, expect } from '@playwright/test';

// test('Verify registration page details', async ({ page }) => {

//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1');

//     const title = await page.title();
//     const url = page.url();
//     const heading = await page.locator('h1').textContent();

//     // Non-retrying assertions
//     expect(title).toContain('Demoapps | Qspider');

//     expect(url).toMatch(/scenario=1/);

//     expect(heading).toEqual('Register');

// });

import { test, expect } from '@playwright/test';

test('Verify name textbox is visible', async ({ page }) => {

    await page.goto('https://demoapps.qspiders.com/ui?scenario=1');

    // Non-retrying assertion
    const buttonText = await page.getByText("Register",{exact:true}).first().textContent();

    expect(buttonText).toBe('Register');

});