function fetchData():Promise<string>
{
return new Promise(resolve=>{
    setTimeout(()=>{ 
resolve("This is resolve method") },5000)
})
}


  // console.log(await fetchData())
  async function waitforasync()
  {
    console.log(await fetchData())
  }

waitforasync()