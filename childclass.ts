import {parentclass} from './Accessmodifiers'

var objchild=new parentclass("Ram",200,500)
console.log(objchild.name)
class childclass extends parentclass{
    obj5=new childclass("child",88,99)
    functionname(): void {
    
    }
}
 var obj4=new childclass("child",88,99)
 console.log(obj4)


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