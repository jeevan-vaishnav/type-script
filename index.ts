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



function PrintKro(id: number | string) {

    if (typeof id === 'string') {
        //In this branch, id is of type string
        console.log(id.toUpperCase())
    } else {
        console.log(id)
    }
}
PrintKro(10)

//Another example is to use a function like Array.isArray

function WelcomeTS(name: string | string[]) {
    if (Array.isArray(name)) {
        console.log(`This is array : ${name}`)
    }else{
        console.log(name)
    }
}
WelcomeTS('Jeevan')
WelcomeTS(['You', 'Are', 'Good', 'TS Developer'])


//Return type as inferred as number | string
function getFirstThree (x:number[] | string){
    return x.slice(0,3)
}
console.log(getFirstThree([10,30,20,40]))
console.log(getFirstThree('Jeevan'))



