import{test,expect} from '@playwright/test'
test("This is my getWindowHandle test case",async({page})=>{
 //   await page.goto("https://www.way2automation.com/way2auto_jquery/frames-and-windows.php#load_box")
    await page.goto("https://www.way2automation.com/way2auto_jquery/automation-practice-site.html")
    await page.waitForTimeout(3000)
    //await page.getByRole("link",{name: "New Browser Tab"}).click()

    const [newpage]=await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole("heading",{name: "Frames and Windows", level: 2}).click()
    ])
  
    await newpage.waitForLoadState()
   const frame= newpage.frames()[1]!
    await page.waitForTimeout(3000)

const [secondpage]=await Promise.all([
        newpage.waitForEvent('popup'),
        frame.getByRole("link",{name: "New Browser Tab"}).click()
    ])
  
    await secondpage.waitForLoadState()
console.log(await secondpage.title())
    await page.waitForTimeout(3000)
})
