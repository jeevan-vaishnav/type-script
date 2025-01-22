// Object Types 
// The parameter's type annotation is an object type

function pritnCoord(pt: { x: number, y: number }) {
    console.log("The cordinate's x value is " + pt.x)
    console.log("The cordinate's y value is " + pt.y)
}

pritnCoord({ x: 10, y: 20 })


// Here, we annotated the parameter with a type with two properties - x and y - which are both of type number. You can use , or ; to separate the properties, and the last separator is optional either way.

// The type part of each property is also optional. If you don’t specify a type, it will be assumed to be any.



// // Options Properties 
// Objec ttypes can also specify theat some or all of their properties 
// are optinal, Todo this add a ? after the property name :

function printName(obj: { first: string; last?: string }) {
    // Error - might crash if 'obj.last' wasn't provided!
    //   console.log(obj.last.toUpperCase());

    if (obj.last !== undefined) {
        // OK
        console.log(obj.last.toUpperCase());
    }
    // A safe alternative using modern JavaScript syntax:
    console.log(obj.last?.toUpperCase());
}

// Both ok
printName({ first: 'Heevan' });
printName({ first: "jeevan", last: "vaishnav" });
