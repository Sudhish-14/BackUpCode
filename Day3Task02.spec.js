import { chromium,test } from "@playwright/test";

test('Day3Task02',async()=>{
    const browser=await chromium.launch({
        headless:false
    });
    const page=await browser.newPage();

    
    
   const frag= await page.getByText('Fragrances');
   await frag.click();
    await page.waitForTimeout(3000)

console.log(await page.getByText('Fragrances'));
})