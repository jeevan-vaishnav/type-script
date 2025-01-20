console.log("Composing Types");
//With TS, we can create complex types by combining simple ones, There are two popular ways to do so :
//unions and genrics 

/**Unions */

type MyBool = true | false
/**Note: If you hover over MyBool above, you'll see that it is classes as boolean. That's property of the structual  
 * Type System more on the below */

/**
 * A popular use case for union types is to describe the set of string or number lteral that a value is allowed to be:
 * 
 */

type WindowState = "open" | "closed" | "minimized"
type LockState = "locked" | "unlocked"
type PossitiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

/**Union provide a way to handle different types too. For example, you have a function that takes an array or a string */

function getLength(obj: string | string[]) {
    return obj.length
}
