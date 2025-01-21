// Defining a Union Type

/**The first way to combine types you might see is a union type */

function printId(id: number | string) {
    console.log("Your ID is : " + id);
}
//ok
printId(10);
//ok
printId("202");
//error
// printId({myID:22455});
// Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.


// The separator of the union members is allowed before the first element, 
// so you could also write this:

function printTextOrNumberOrBool(textOrNumberOrBool: string | number | boolean) {
    console.log(textOrNumberOrBool)
}

//ok
printTextOrNumberOrBool(10);
//ok
printTextOrNumberOrBool("10");
//ok
printTextOrNumberOrBool(true);
//error
// printTextOrNumberOrBool({textOrNumberOrBool:10});

// Argument of type '{ textOrNumberOrBool: number; }' 
// is not assignable to parameter of type 'string | number | boolean'.ts(2345)

