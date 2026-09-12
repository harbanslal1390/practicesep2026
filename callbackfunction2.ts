function callbackfunction()
{
    console.log("This is my callback function")
}
function customerservice(futurefunction:()=>void)
{
    console.log("This is customerfunction")
    futurefunction()
}
customerservice(callbackfunction)