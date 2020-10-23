const {chromium, firefox} = require('playwright');

(async () => {
  for (const browserType of [firefox, chromium]) {
    const browser = await browserType.launch({
      headless: true,
    });
    const context = await browser.newContext({
        viewport: { width: 730, height: 550 },
      });
    const page = await context.newPage();
    await page.goto('https://webglreport.com/');
    await page.waitForTimeout(10000);
    await page.screenshot({
      path: `screenshot-${browserType.name()}.png`,
    });
    await browser.close();
    console.log('success: ' + browserType.name());
  }
})();