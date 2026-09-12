import{test,expect} from '@playwright/test'
test.skip("This is getbytext testing",async({page})=>{
    await page.goto("https://www.facebook.com/")
    await page.waitForTimeout(5000)
    await page.getByText("Create new account").click()
    await page.waitForTimeout(5000)
})
test.skip("User of geybyalttext",async({page})=>{
    await page.goto("https://www.flipkart.com/")
    await page.waitForTimeout(2000)
    await page.keyboard.press('Escape')
    await page.waitForTimeout(2000)
    await page.getByAltText("Login").click()
    await page.waitForTimeout(10000)

})
test.skip("Test the label with input box",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.getByLabel("Username").fill("Hello@gmail.com")
    await page.waitForTimeout(5000)
})

test.skip("How to test placeholder",async({page})=>{
await page.goto("https://www.flipkart.com/")
await page.waitForTimeout(5000)
await page.keyboard.press("Escape")
await page.getByPlaceholder("Search for Products, Brands and More").first().fill("mobile")
await page.waitForTimeout(5000)
})

test.skip("test with get by role",async({page})=>{
    await page.goto("https://www.myntra.com/")
    await page.getByRole("link",{name: "WOMEN "}).nth(1).click()
    await page.waitForTimeout(10000)

})
test.skip('interact with Wikipedia using titles', async ({ page }) => {
  await page.goto('https://en.wikipedia.org/wiki/Main_Page');

  // getByTitle — Wikipedia's sidebar/tools links carry title attributes
  await page.getByTitle('Visit the main page').click();
  await page.getByTitle('Search Wikipedia').click();
});

test('airbnb listing cards', async ({ page }) => {
  await page.goto('https://www.airbnb.com/s/Paris/homes');

  const firstCard = await page.getByTestId('card-container').first().getAttribute("class");
  console.log(firstCard);
});