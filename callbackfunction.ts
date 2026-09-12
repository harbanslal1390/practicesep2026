function sayhi()
{
    console.log("hi")
    return "harry"
}
function message(callfunctionhere:()=>string)
{
    console.log("This is before callback")
console.log(callfunctionhere())
console.log("This is after callback")
}

message(sayhi)

function secondmethod(message:string){
console.log(message)
}
function firstfunction(callbackfunction:(message:string)=>void){
    callbackfunction("I am calling the string")
}

firstfunction(secondmethod)

