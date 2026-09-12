export class parentclass{
    public name:string;
    private age:number;
    protected rollnumber:number
    public static studentid:number=1000
    c=100
    constructor(name:string,age:number,rollnumber:number)
    {
this.name=name
this.age=age
this.rollnumber=rollnumber
console.log("The name of the student is :"+this.name)
console.log("The name of the student is :"+this.age)
console.log("The name of the student is :"+this.rollnumber)
console.log("The name of the student is :"+parentclass.studentid)      
}
functionname()
{
    var obj2=new parentclass("Harry",30,2000)
    obj2.name="gerry"
    obj2.age=50
    obj2.rollnumber=3000
    console.log(obj2)
    console.log(this.c)
    
}

}
var obj1=new parentclass("Harry",30,2000)
console.log("The name of the student is :"+parentclass.studentid)
console.log("The name of the student is :"+obj1.name)
obj1.functionname()