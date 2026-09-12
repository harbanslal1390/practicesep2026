import{test,expect} from '@playwright/test'
test("This test case belongs to webtables",async({page})=>{
    await page.goto("https://www.tutorialspoint.com/selenium/practice/webtables.php")
    await page.waitForTimeout(5000)
    const countofcolumns=await page.getByRole('columnheader').count()
    console.log("The number of the columns are : "+countofcolumns)
    await page.waitForTimeout(5000)
    const textofcolumns=await page.getByRole('columnheader').allInnerTexts()
    for(var i of textofcolumns)
    {
        console.log("The text of all columns is :"+i)
    }
  // let rowscount= await page.getByRole("row").count()
  let rowscount=await page.locator("//tbody//tr").count()
    console.log("Number of rows in the table is :"+rowscount)
    let alltextofrows=await page.locator("//tbody//tr").allInnerTexts()
    for(let i of alltextofrows)
    {
        console.log("The value of the i is :"+i)
    }

})