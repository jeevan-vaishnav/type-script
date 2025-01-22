// Return Type Annotations

function getFavNumber(): number {
    return 26;
}
console.log(getFavNumber)

// Functions Which Return Promises
async function getFNumber(): Promise<number> {
    return 26
}

console.log(getFNumber())


// Anonymous Functions

/**
 * Anonymous functions are a littile bit dif from function decls 
 * when a function apears in a place where ts can determine how can 
 * its going to be called , the paramters of the function are automatically 
 * give types
 */


const names = ['AL','BD',"Eve"]

//Contextual typing for function - parameter s infered to have type string 

names.forEach((s)=>{
    console.log(s.toUpperCase())
})
