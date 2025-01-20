//To Learn the type of varibale use typeof 
// Type	Predicate
// string	typeof s === "string"
// number	typeof n === "number"
// boolean	typeof b === "boolean"
// undefined	typeof undefined === "undefined"
// function	typeof f === "function"
// array	Array.isArray(a)

//Function which return diff value baesd on the string or an array 
function wrapInArray(obj: string | string[]) {

    if (typeof obj === 'string') {
        return [obj] // return only string 
    }
    if (typeof obj === 'number') {
        return [obj]
    }
    if (typeof obj === 'boolean') {
        return [obj]
    }
    if (typeof obj === 'undefined') {
        return [obj]
    }
    if (typeof obj === "function") {
        return [obj]
    }
    if (Array.isArray(obj)) {
        return `Is array:  ${[obj]}`
    }
    return obj // return incase string is an array
}

console.log(wrapInArray(["Hey TS", "Hey Jeevan"]))