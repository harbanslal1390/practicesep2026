//if I hardcode the variable values on the class
class superuseclass{
    name:string="Harry"
    classname:string="Firstclass"
}
var obj=new superuseclass()
console.log(obj.name)
console.log(obj.classname)
var obj1=new superuseclass()
console.log(obj1.name)
console.log(obj.classname)
var obj2=new superuseclass()
console.log(obj2.name)
console.log(obj2.classname)
// so you can see everytime we are getting same value which is practically not correct
// Lets try with constructor each object get its value
class superclassuse1{
    name:string="Harry"
    classname:string="Firstclass"
    constructor(name:string,classname:string)
    {
        this.name=name
        this.classname=classname
    }
}

var obj1=new superclassuse1("Gerry","second")
console.log(obj1.name)
console.log(obj1.classname)
var obj2=new superclassuse1("jerry","third")
console.log(obj2.name)
console.log(obj2.classname)
var obj3=new superclassuse1("aerry","fourth")
console.log(obj3.name)
console.log(obj3.classname)

// But this is not right if user wants to pass one value two value or no value then it will create problem

class supperconstructoroverloading{
    name1:string
    age1:string
    constructor()
    constructor(name1:string)
    constructor( name1:string, age1:string)
    constructor(name1?:string,age1?:string)
    {
      this.name1=name1?? "defaultname"
      this.age1=age1??"defaultage"
    }
}
var obj4=new supperconstructoroverloading()
var obj5=new supperconstructoroverloading("Haja","twenty")
var obj6=new supperconstructoroverloading("Rama")

console.log(obj4.age1,obj4.name1)
console.log(obj5.age1,obj5.name1)
console.log(obj6.age1,obj6.name1)
