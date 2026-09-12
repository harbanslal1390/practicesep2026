var name:string="Harry"
console.log(`my name is ${name}`)

let num:number=20
console.log('my number is ${num}')
//num=40 it is not allowed because num is of type number and we are trying to assign a string value to it.
let num1="stringvalue"
//num1=40 //this is not allowed because num1 is of type string and we are trying to assign a number value to it.
let num2:undefined;
num2=undefined //this is allowed because num2 is of type undefined and we are trying to assign a undefined value to it.
//num2=30 //this is not allowed because num2 is of type undefined and we are trying to assign a number value to it.
let num3=undefined
num3=30 //this is allowed because num3 is of type undefined and we are trying to assign a number value to it.
let num4=null 
num4=39 //this is allowed because num4 is of type null and we are trying to assign a number value to it.
let num5:null
//num5=50 //this is allowed because num5 is of type null and we are trying to assign a null value to it.
let num6:any
num6=50
num6="stringvalue" //this is allowed because num6 is of type any and we are trying to assign a string value to it.
num6=22.44 //this is allowed because num6 is of type any and we are trying to assign a number value to it.
//let num7=any //any is not a valid type in TypeScript, so this line will cause an error. You should use 'any' without quotes or assign a valid type to num7.
