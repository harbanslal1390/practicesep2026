var array:number[]=[1,2,3,4,5,6,7,8,9]
var max=array[0] ?? -Infinity
for(var i=0;i<array.length;i++)
{
    console.log(array[i])
    if(array[i]??-Infinity>max)
    {
        max=array[i] ?? -Infinity
    }

}
console.log("The maximum value of array is :"+max)