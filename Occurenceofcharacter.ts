var map = new Map<string, number>()
var stringval: string = "This is my dummy string"

for(var c of stringval)
{
    if(map.has(c))
    {
     map.set(c,(map.get(c)??0)+ 1)
    }
    else{
        map.set(c,1)
    }
}
console.log(map)