import { test, expect } from '@playwright/test';

test('Soft Assertion Demo', async ({ page }) => {

  await page.goto('https://demoapps.qspiders.com/ui?scenario=1');

  const title = await page.title();

  expect.soft(title).toContain('Demo124');

  const buttonText = await page.locator('button').textContent();

  expect.soft(buttonText).toContain('Register1235');

  console.log('Execution Continues');

});