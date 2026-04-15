const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://ava.univel.br/');


  await page.waitForSelector('input', { timeout: 15000 });


  const inputs = await page.locator('input').all();
  console.log('Qtd inputs:', inputs.length);

  await page.locator('input').first().fill('EAFORMENTON');
  await page.locator('input[type="password"]').fill('89439452');

  await page.locator('button, input[type="submit"]').click();

  await page.waitForTimeout(8000);
})();