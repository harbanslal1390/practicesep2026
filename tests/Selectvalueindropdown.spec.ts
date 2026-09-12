import{test,expect, Locator} from '@playwright/test'
test.skip("Handle drop down",async({page})=>{
    await page.goto("https://www.wikipedia.org/")
    await page.selectOption("select",{label:'العربية'})
    await page.waitForTimeout(5000)
    await page.selectOption("Select",{value:'hi'})
    await page.waitForTimeout(5000)
    await page.selectOption('select#searchLanguage',{index:2})
    await page.waitForTimeout(5000)
   // var totalelements:Locator[]=await page.locator("//select[@id='searchLanguage']/option").all()
    
   //the above line can also work like this

   var totalelements=await page.$$("//select[@id='searchLanguage']/option")
   console.log("Total option elements in the select tags are :"+totalelements.length)
   var totalelements1=await page.$$("#searchLanguage")
   console.log("Total option elements in the select tags are :"+totalelements1.length)
    
})
test.skip("How to get all text of the labels",async({page})=>{
    await page.goto("https://www.wikipedia.org/")
    var totalelements:Locator[]=await page.locator("//select[@id='searchLanguage']/option").all()
    
    for(var i of totalelements)
    {
        console.log(await i.innerText())
        console.log("Value of "+await i.getAttribute('value'))
    }
    
})