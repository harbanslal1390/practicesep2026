const arrayval: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arrayval.sort((a,b)=>a-b))
console.log("The value fo arraylenght is "+arrayval.length +" and the value of array is "+arrayval[arrayval.length])
console.log("The maximum value in the array is :" + arrayval[arrayval.length-1])
const secondLargestValue = arrayval[arrayval.length-2]
console.log("The second largest value in the array is :" + secondLargestValue)
