import{test,expect} from '@playwright/test'
test.skip("This test case is for mouse hover",async({page})=>{
    await page.goto("https://www.firstcry.com/?srsltid=AfmBOortVmeYudeM5rAE9-exklVrCOWwaQPMiEebaYS6mkslRk4u_n2P")
    await page.getByText('BOY FASHION').first().hover()
    await page.waitForTimeout(5000)

})
test.skip("This test case is for heading",async({page})=>{
await page.goto("https://playwright.dev/")
const heading= await  page.getByRole("heading",{level:1}).textContent()
console.log(heading)
const buttonfirst=await page.getByRole("link",{name: "Get started"}).textContent()
console.log(buttonfirst)

})
test.skip("Test textbox with getbyrole",async({page})=>{
await page.goto("https://demo.playwright.dev/todomvc")
var value=await page.getByRole("textbox",{name: "What needs to be done?"}).fill("Test value entered")
await page.waitForTimeout(2000)
await page.getByRole("textbox",{name: "What needs to be done?"}).press('Enter')
await page.waitForTimeout(2000)
await expect(page.getByText("Test value entered")).toBeVisible()
await page.waitForTimeout(2000)
var value=await page.getByRole("textbox",{name: "What needs to be done?"}).fill("ddTest value entered")
await page.waitForTimeout(2000)
await page.getByRole("textbox",{name: "What needs to be done?"}).press('Enter')
await page.waitForTimeout(2000)
var allcheckbox=await page.getByRole("checkbox",{name: "Toggle Todo"}).all()
for(var i of allcheckbox)
{
    i.check()
}
await page.waitForTimeout(2000)
})
test.skip("check one checkbox with filter and learn not and tobechecked",async({page})=>{
    await page.goto("https://demo.playwright.dev/todomvc/#/")
    await page.getByRole("textbox",{name: "What needs to be done?"}).fill("Watch dog")
     await page.getByRole("textbox",{name: "What needs to be done?"}).press("Enter")
     await page.waitForTimeout(5000)
     await page.getByRole("textbox",{name: "What needs to be done?"}).fill("Watch catch")
     await page.getByRole("textbox",{name: "What needs to be done?"}).press("Enter")
     await page.waitForTimeout(5000)
     await page.getByRole("listitem").filter({hasText:'Watch dog'}).getByRole('checkbox',{name: "Toggle Todo"}).check()
     await expect(page.getByRole("listitem").filter({hasText:'Watch dog'}).getByRole('checkbox',{name: "Toggle Todo"}) ).toBeChecked()
   await page.waitForTimeout(5000)
    })

    test.skip("This is the right click functionality",async({page})=>{
        await page.goto("https://deluxe-menu.com/popup-mode-sample.html")
        await page.locator("//img[@src='data-samples/images/popup_pic.gif']").click({button:"right"})
        await page.waitForTimeout(5000)

  await page.locator('#dm2m1i1tdT').hover();
                await page.waitForTimeout(5000)
                  await page.locator('#dm2m2i1tdT').hover();
                  await page.waitForTimeout(5000)
                  await page.locator('#dm2m3i0tdT').click()
                
    })
    test.skip("This test case is for the alert",async({page})=>{
        await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
        await page.waitForTimeout(5000)
        page.on("popup",async(popup)=>{
            console.log("Dialog is my word given"+popup.message())
            await popup.accept()

        })
        await page.getByRole("button",{name: "Click for JS Alert"}).click()
           await page.waitForTimeout(5000)
           await expect(page.locator("#result")).toHaveText("You successfully clicked an alert")
           await page.getByRole("button",{ name: "Click for JS Confirm"}).click()
           await page.waitForTimeout(5000)
         // await expect(page.locator("#result")).toHaveText("You clicked: Ok")
          await page.waitForTimeout(5000)

        })


