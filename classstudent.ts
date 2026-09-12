export class student {
    name:string
    age:number
    constructor(name:string,age:number)
    {
this.name=name
this.age=age
console.log("The name of the student is :"+this.name)
console.log("The name of the student is :"+this.age)

}
 displaystudentdetails(rollnumber:number,studentid:number)
    {
        console.log(this.name)
        console.log(this.age)
        console.log("This is my student roll number and student id "+ rollnumber+" "+studentid)  
    }
    }

    var obj=new student("Harry",30)
    obj.displaystudentdetails(2000,3000)
