import{test,expect} from '@playwright/test'
test.skip("This is the first test case",async({page})=>{
   await page.goto('https://d1mr8fjntorukf.cloudfront.net/') 
   await page.waitForTimeout(3000)
   var titlename:string=await page.title();
   console.log(titlename)
   await page.waitForTimeout(5000)
   expect(titlename).toContain('global-scv-web [stage]')
   await page.waitForTimeout(3000)
})