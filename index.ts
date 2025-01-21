// The Basic
// const message = "Hello World!";
// message.toLowerCase()
// console.log(message)

// Non-exception Failures
const User = {
    name: "Jeevan",
    age: 26
}

// User.location; // return undefined 

// Property 'location' does not exist on type '{ name: string; age: number; }'.


const announcement = "Hello There"

// How quickly can you spot the typos?
announcement.toLocaleLowerCase();
announcement.toLocaleUpperCase();
//We probely meant to write this
announcement.toLocaleLowerCase();

// uncalled functions,

// function flipCoin(){
//     // Meant to be Math.random();
//     return Math.random < 0.5
// }
// Operator '<' cannot be applied to types '() => number' and 'number'.



// or Basic Logic Error 
const value = Math.random() < 0.5 ? "a" : "b"

if (value !== "a") {
    //..
}
else if (value === 'b') {
    // This comparison appears to be unintentional because the types '"a"' and '"b"' have no overlap.
    // Oops, unreachable

}

