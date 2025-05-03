import { chromium,test,expect } from "@playwright/test";

test('Amazon.in',async()=>{
    const browser=await chromium.launch({
        headless:false
    })
    const page=await browser.newPage();
    await page.goto('https://www.amazon.in/')
    const select =await page.locator('select#searchDropdownBox').click();

    await select.fill("i phone");
    await page.waitForTimeout(2000);
    await page.locator('//div[@class="left-pane-results-container"]/descendant::div[@role="button"]');

});