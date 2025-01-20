// Simple print hello world 
let helloworld = "hello world"
console.log(helloworld)
// Defining Types: create a object with inrefred type which includes string and number 
const user = {
    name:"jeevan",
    id:10
}
console.log(user)

// We can explicitly describe this objects shape using interface declaration
interface User{
    name:string,
    id:number
}