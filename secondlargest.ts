let longarray=[1,2,3,4,5,6,7,8,9]

let maxvalue=-Infinity
let secondmaxval=-Infinity

function secondlargestnumber(arrayval:number[])
{
    for(var i of arrayval)
    {
        if(i>maxvalue)
        {
            secondmaxval=maxvalue
            maxvalue=i
            
        }
        else if(i>secondmaxval&&i!=maxvalue) {
      secondmaxval=i
        }
        
    }
    return secondmaxval
}

console.log(secondlargestnumber(longarray))