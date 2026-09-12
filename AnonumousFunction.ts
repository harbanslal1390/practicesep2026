var functionname=function()
{
    console.log("This is an anonymous function")

}
functionname()
var arrowfunction=()=>console.log("This is my one line arrow function")
arrowfunction()
var functionname1=function(a:number,b:number)
{
    console.log("ok I am anonymous function having value addition "+(a+b))
}
functionname1(5,10)
var arrowfunction1=(a:number,b:number)=>console.log("ok I am arrow function one "+(a+b))
arrowfunction1(5,10)

var functionrestparameter=(...args:number[])=>{
let total=0
for(var i=0;i<args.length;i++)
{
    
    total=total+args[i]!
    
}
console.log("Total: "+total)
}
functionrestparameter(10,20,30,40,50)