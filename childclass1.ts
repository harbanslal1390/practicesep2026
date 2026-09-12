import {parentclass} from './abstractparenetclass'

export class childclass1 extends parentclass{
    functionname()
    {
        console.log("Child 1 class implemente the method ko")
    }
}
var obj2=new childclass1()
obj2.secondmethod()