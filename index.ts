// Structural Type System

/**
 * One of TS core principles is that type checking focuses on the shape that 
 * values have. 
 * This is sometimes called "duck typing" or "structural typing "
 * 
 */

/**
 * In a strctual type system, if two objects have the same shape, 
 * they are considered to be of the same type
 * 
 */
interface Point {
    x:number;
    y:number
}

function logPoint(p:Point){
    console.log(`${p.x}, ${p.y}`);
}

const point = {x:12,y:20}
logPoint(point)
const rect = { x: 33, y: 3,m :5, width: 30, height: 80 }; //33,3
logPoint(rect)

// There is no difference between how classes and obejcts conforms to shapes 



class VirtualPoint{
    x:number;
    y:number;

    constructor(x:number,y:number){
        this.x = x;
        this.y = y
    }
}

const newPoint = new VirtualPoint(13,56);
logPoint(newPoint);

// If the object or class has all the required properties, TypeScript will say they match, regardless of the implementation details.


