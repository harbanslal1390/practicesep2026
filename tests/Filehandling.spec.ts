import{test,expect}from '@playwright/test'
test("This is filehandling",async({page})=>{
await page.goto("https://the-internet.herokuapp.com/upload")
await page.waitForTimeout(5000)
await page.setInputFiles("#file-upload","./Importfiles/dummy.png")
await page.waitForTimeout(5000)
})