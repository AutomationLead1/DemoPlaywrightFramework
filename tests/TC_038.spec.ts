import { test, expect } from '@playwright/test';

test('Verify Register text is displayed', async ({ page }) => {

  await page.goto('https://demoapps.qspiders.com/ui?scenario=1');

  // Non-retrying assertion
  const buttonText = await page.getByText('Register', { exact: true }).last().textContent();

  expect(buttonText).toBe('Register');

});