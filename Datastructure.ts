var list:number[]=[10,20,30,40,50]
console.log(list.length)

list.push(111)
list.push(222)
list.push(333)
for(var i of list)
{
    console.log(i)
}
list.pop()
for(var i of list)
{
    console.log("Now my value is: "+i)
}

 let setvar:Set<number>=new Set()
 setvar.add(100)
 setvar.add(200)
 setvar.add(300)
 setvar.add(400)
 for(var i of setvar)
 {
    console.log(i)
 }
setvar.delete(100)
 for(var i of setvar)
 {
    console.log(i)
 }
 setvar.clear()
 for(var i of setvar)
 {
    console.log(i)
 }
 
 let setvarw:Set<any>=new Set()
  setvarw.add(100)
 setvarw.add(200)
 setvarw.add("ramji")
 setvarw.add(400)
 console.log(setvarw)

 console.log(setvarw.has(100))

 setvarw.forEach(s=>console.log(s))


 var map:Map<number,string>=new Map()
 map.set(1,"ram")
 map.set(2,"shyam")
 map.set(3,"geyam")
 console.log(map)
 console.log(map.has(1))
 console.log(map.get(1))
 map.delete(2)
 console.log(map)
 for(var i of map.keys())
 {
console.log(i)
console.log(i+"value of keys"+map.get(i))
 }