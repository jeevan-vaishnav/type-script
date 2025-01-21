function printText(s: string, alignment: "left" | "right" | "center") {
    // ...
}
printText("Hello, world", "left");
//   printText("G'day, mate", "centre");
//   Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'.



// Numeric literal types work the same way:
function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
}
console.log(compare("1", "2"))

/**Of course, you can combine these with non-literal types */

interface Options {
    width: number;
}

function configure(x: Options | "auto") {
    return x
}

console.log(configure({ width: 200 }))
console.log(configure('auto'))
// console.log(configure('automatic')) // throw error 
// Argument of type '"automatic"' is not assignable to parameter of type 'Options | "auto"'.


/**
 * There's one more kind of literal type: boolean literals. There are only two boolean 
 * literal types, and as you might guess, they are tye types ture and false
 * The type boolean itself is actually just an alias for the union true | false
 */

//Literal Inference 

/**
 * When you initialize a variable with an object, TypeScript assuems that the properties 
 * of that object might change values later,
 * For example, if you wrote codee like this
 */


const myObj = { counter: 0 };
if (true) {
    myObj.counter = 1
}
console.log(myObj)


/**
 * TypeScript doesn't assumes the assignment of 1 to a field which previously had 0 is an error
 * Another way of saying this is that obj.counter must have the type number , not 0
 * becuase types are used to determine both reading and writing behavior.
 */


//The sample applies to string 
declare function handleRequest(url: string, method: "GET" | "POST"): void
const req = { url: "https://example.com", method: "GET" as "GET" } as const;

// handleRequest(req.url,req.method);
// Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.

handleRequest(req.url,req.method);




