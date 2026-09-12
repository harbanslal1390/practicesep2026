var a:string='harry'
function myfunction()
{
    console.log(a)
    var b:string="jerry"
    console.log(b)
}
myfunction()

if(true)
{
let b="jerry"
}
//console.log(b) let is block scoped
if(true)
{
    var c="lary"
}
console.log(c)
c="ppp"
console.log(c)
a="ooo"
console.log(a)
const j=200
if(true)
{
    console.log(j)
    const p=300
}
//console.log(p)//const is also block scoped you can not use outside of the block
//console.log(r)
let r=900
