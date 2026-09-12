import{test,expect} from '@playwright/test'
test.skip("Test checkbox is checked or not",async({page})=>{
await page.goto("https://www.tizag.com/")
const checkbox=page.locator("(//input[@value='soccer'])[2]");
if(!checkbox.isChecked())
{
    console.log("check box is already checked")
}
else{
  await  checkbox.click()
}
await page.waitForTimeout(5000)
})