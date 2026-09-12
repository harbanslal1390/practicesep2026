function myfunction()
{
    console.log("This is my function")
}
myfunction()
function myfunction1(a:number,b:number)
{
    console.log("ok ok I am function 1 The value of the a is :"+a)
    console.log("ok ok I am function 1The value of the b is :"+b)
    return a+b
}
function myfunction2(a:number,b?:number)
{
    console.log("The value of the a is :"+a)
    console.log("The value of the b is:"+b)
}
function myfunction3(...args:number[])
{
    console.log("The value of the args is :"+args)
    for(var i=0;i<=args.length;i++)
    {
        console.log("The value of the args is:"+args[i])
    }
}
function myfunction4(a:number,b:number=100)
{
    console.log("The value of the a is :"+a)
    console.log("The value of the b is :"+b)

}

myfunction()
myfunction1(10,20)
myfunction2(10,20)
myfunction3(10,20,30,40,50)
myfunction4(10,20)

console.log("The value of the myfunction1 is :"+myfunction1(10,20))
var d=myfunction1(10,20)
console.log("The value of the d is :"+d)