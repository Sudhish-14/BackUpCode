import { chromium,test,expect } from "@playwright/test";

test('Amazon.in',async()=>{
    const browser=await chromium.launch({
        headless:false
    })
    const page=await browser.newPage();
    await page.goto('https://www.amazon.in/')
    const select =await page.locator('select#searchDropdownBox').click();
    const searchContent=await page.locator("select#searchDropdownBox").selectOption("Electronics");
    await page.waitForTimeout(2000);
    const SearchToolBar =await page.locator('input#twotabsearchtextbox');
    await SearchToolBar.fill("i phone");
    await page.waitForTimeout(2000)
     await page.locator('//div[@class="left-pane-results-container"]/descendant::div[@aria-label="i phone16 pro max 256"]/child::span[text()="16 pro max 256"]').click();
    await page.waitForTimeout(2000);
})
