enum weekdays{
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
console.log(weekdays.Monday)
console.log(weekdays.Tuesday)
console.log(weekdays.Wednesday)

enum customenum{
    Sunday="January",
    Monday="February",
    Tuesday=100
}
console.log(customenum.Sunday)
console.log(customenum.Monday)
console.log(customenum.Tuesday)

let arrayexample:string[]=["harry","gerry","sherry"]
console.log(arrayexample[0])
for(let i=0;i<arrayexample.length;i++)
{
    console.log(arrayexample[i])
}
for(var j in arrayexample)
{
    console.log(j)
console.log(arrayexample[j])
console.log("The value of the j is :"+arrayexample[j])
}
var b=10
switch(b)
{
    case 1:
        console.log("the vlaue of b is 1")
        break
        case 2:
            console.log("The value of the b is 2")
            default:
                console.log("I did not find the vlaue of b")
                break
}
if(b==10)
{
console.log("the value of b is 10")
}
else
{
    console.log("The value of the b is not 10")
}
    
while(b<20)
{
    console.log("The value of the b is :"+b)
    b++
}

do{
    b=b+1
    console.log("______The value of the b is :"+b)
}while(b<30)

    var longstring:string="This is a long string"
    for(var i=0;i<longstring.length;i++)
    {
        console.log(longstring[i])
        console.log("The value of long string is "+longstring.charAt(2))
    }

var c:number=12
c=++c
console.log("the value of the c is"+c)