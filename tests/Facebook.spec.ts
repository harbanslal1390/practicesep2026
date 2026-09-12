import { test, expect } from '@playwright/test'

test('click on forget link', async ({ page }) => {
  await page.goto('https://www.facebook.com/')
  await page.waitForTimeout(5000)
  await page.pause()
  await page.getByRole('link', { name: 'Forgotten password?' }).click()
  await page.waitForTimeout(5000)

 

/* const targetDiv1 = page.locator('div')
  .filter({ has: page.getByRole('link', { name: 'Sign up' }) })
  .filter({ has: page.getByRole('link', { name: 'Log in' }) })
  .filter({ has: page.getByRole('link', { name: 'Terms' }) }); */

  const targetDiv1= page.locator('div').filter({has:page.getByRole('link',{name:'Sign up'})}).filter({has:page.getByRole('link',{name:'Log in'})})

  const alllinks=await targetDiv1.getByRole('link').allInnerTexts()
  for(var i of alllinks)
  {
    console.log("The value of the i is "+ i)
  }
 
})





