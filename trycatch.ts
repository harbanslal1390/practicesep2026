var num:number=100
var b:number=0

function devidefunction(num:number,b:number)
{
    var c=num/b
    if (b==0)
    {
        throw new Error("Divion is not possible by zero")
    }
}

try{
    devidefunction(num,b)
}
catch(e)
{
    console.log("The vlaue of b is not ok")
}