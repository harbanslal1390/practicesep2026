function orderPizza(callback:()=>void)
{
console.log("Cooking pizza...")
callback()
}
function pizzaReady()
{
   console.log("Pizza is ready, come eat!")
}
orderPizza(pizzaReady)