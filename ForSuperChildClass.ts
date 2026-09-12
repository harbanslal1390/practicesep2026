import { forsuperparentclass} from "./ForSuperParentClass" 
class forsuperchildclass extends forsuperparentclass
{
     size:number=2000
    constructor()
    {
        super("ram")
        super.functionname()
    }
}
var obj=new forsuperchildclass()
obj.functionname()
console.log(obj.size)
