// const { chromium,test,expect} = require("@playwright/test")

 import {test,chromium,expect} from '@playwright/test';

test('locator',async()=>{
    const Browser=await chromium.launch({
        headless:false
    }
);
const page=await Browser.newPage();
await page.goto("https://www.chemistwarehouse.com.au/")
await page.getByRole('link', { name: 'CONTINUE' }).click();
const PageTitle=await page.title();
await expect(page).toHaveTitle(PageTitle)
console.log(PageTitle)
const PageURL=await page.url();
await expect(page).toHaveURL(PageURL);
console.log(PageURL);
 const PageSearch=await page.locator("//div[@id='Header']/descendant::input[@class='search-box__input']");
 await expect(PageSearch).toBeVisible()
 await PageSearch.fill('mobiles');
//  await expect(PageSearch).toBeVisible()
 await page.waitForTimeout(4000)
//  console.log(PageSearch);
await page.click('//*[@id="Header"]/div[1]/div[2]/div[2]/div[2]/div/div/form/input[2]');
await page.waitForTimeout(3000);


})