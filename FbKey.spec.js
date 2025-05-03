import { chromium,test,expect } from "@playwright/test";

test('keyBoard action', async()=>{
const browser=await chromium.launch({
    headless:false
})

    const page=await browser.newPage();
    await page.goto('https://www.amazon.in/')

})