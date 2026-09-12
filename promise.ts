const p=new Promise((resolve,reject)=>{
resolve("pizza ")
})
console.log(p)
p.then((value)=>{
    console.log(value)
})
const q=new Promise((resolve,reject)=>{
    reject("Pizza is not ready")
})
q.catch((value)=>{
console.log(value)
})

const r=new Promise((resolve,reject)=>{
    resolve("Paper passed")
})
r.then((value)=>{
    console.log("This is the value of resolve execution : "+value)
}).catch((value)=>{
console.log("This is rejection case value is :"+value)
})

function returnpromise():Promise<String>
{
return new Promise((resolve,reject)=>{
  setTimeout(()=>{
    reject("This promise is resolved")
  },2000)
})
}
returnpromise().then((value)=>{console.log("The value of the value is "+value)}).catch((value)=>{console.log("the value of rejected value is "+value)})


var ifelsepromise=new Promise((resolve,reject)=>{
   
     var  flag=true
      setTimeout(()=>{

  if(flag)
  {
resolve("Yes problem is solved")
  }
  else{
reject("No problem is not solved")
  }
      },5000)
})
ifelsepromise.then((resolvevalue)=>{console.log("The value is resolved"+resolvevalue)}).catch((failvalue)=>{
console.log("The value of the catch is failed "+ failvalue)
})