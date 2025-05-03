// // const{chromium,test,expect}=require("@playwright/test")

// // test("Brwser Launch",async()=>{
// //   const BrswLnch=  await chromium.launch({
// //         headless:false
// //     })
// //     const Page=await BrswLnch.newPage()
// //     await Page.goto("https://www.flipkart.com/").test.setTimeout(60000);
// //    const PageTitle= await Page.title()
// //    await expect(Page).toHaveTitle(PageTitle)
// //    console.log(PageTitle)

// //    await Page.waitForNavigation()
// //   //  const page=await Browser.newPage();
// //    await page.goto("https://www.amazon.in/")
// //    const PageTitle1= await Page.title()
// //    await expect(Page).toHaveTitle(PageTitle1)
// //    console.log(PageTitle1)
// // })
// const browser=  await chromium.launch({
//   headless:false
// })
// const page=await browser.newPage();
// await page.goto("https://www.facebook.com/r.php");
// //   await page.getByRole('link', { name: 'CONTINUE' }).click();
// const arr=["Sudhish","Sundar","sudhish@gmail.com","sudhish1234"];
// for(const get of arr){
//   if(get==arr[0]){
//       const name=await page.locator('//div[@class="uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput"]/child::input[@name="firstname"]');
//       await name.fill(get);
//       await page.waitForTimeout(2000);
//   }
//   if(get==arr[1]){
//     const sureName=  await page.locator('//div[@class="uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput"]/child::input[@name="lastname"]');
//     await sureName.fill(get);
//     await page.waitForTimeout(2000);
//   }
//   if(get==arr[2]){
//     const mail=  await page.locator('//div[@class="uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput"]/child::input[@name="reg_email__"]');
//       await mail.fill(get);
//       await page.waitForTimeout(2000);
//   }
//   if(get==arr[3]){
//       const password=await page.locator('//div[@class="uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput"]/child::input[@name="reg_passwd__"]');
//       await password.fill(get);
//       await page.waitForTimeout(2000);
//   }
// }

import { chromium,test } from "@playwright/test";

test('GetByText',async()=>{
  const browser=await chromium.launch();
  const page=await browser.newPage();
//   await page.goto('https://www.facebook.com/r.php');
// //  const txt= await page.locator('//div[text()="Create a new account"]').textContent();
// // //  const txt=await page.textContent('Create a new account');
// //  console.log(txt);
// //   await page.waitForTimeout(3000)
// await page.getByLabel('First name').fill("RAM")
// await page.getByAltText('Facebook')
// await page.waitForTimeout(3000)
await page.goto('https://www.amazon.in/');
  await page.locator('(//div[@class="a-cardui-header"]/child::h2[@class="a-color-base headline truncate-2line"])[1]');
  await page.waitForTimeout(3000);
})

