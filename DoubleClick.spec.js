import { chromium,test,expect } from "@playwright/test";

test("DoubleClick",async()=>{
    const browser=await chromium.launch({
        headless:false
    })

    const page=await browser.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");
//    const db= await page.locator('//button[text()="Copy Text"]');
//     await db.dblclick()
//     await page.waitForTimeout(3000);
    
    // const locator1 = await page.locator('//input[@value="Hello World!"]');
    // const lot=await locator1.textContent();
    // console.log(lot);

    // const locator2 = await page.locator('input#field2').textContent();

    //  const f2 = await expect(locator1). toEqual(locator2);
    // console.log(locator2);
    // const field1=  await page.locator('input#field1');
    // const ftext1=await field1.inputValue();
    // // await expect(ftext1).to
//  console.log(ftext1);
   const drag= await page.locator('//div[@class="ui-widget-content ui-draggable ui-draggable-handle"]');
   const drop=await page.locator('//div[@id="droppable"]');
   await drag.dragTo(drop);
   await page.waitForTimeout(3000);



})