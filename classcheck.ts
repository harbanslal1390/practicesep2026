
 class checkobject{
    a:string
    constructor(a:string)
    {
        this.a=a
    }
    functionname()
    {
        console.log(this.a)
    }
     obj6=new checkobject("harry")
     
 
 }

var obj7=new checkobject("harrys")
obj7.functionname()