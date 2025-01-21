// Type Aliases 
/**
 * We've been using object types and union types by writing them directly in type annotations.
 * This is convenient, but its common to want to use the same type more than once and refer
 * to it by single name.
 */

/**A type alias is excatly that - a name for any type. The syntax for a type alis is: */

type typePoint = {
    x: number;
    y: number;
}

// extactly the same as the earlier example 
function printCoord(pt: typePoint) {
    console.log(`The coordinate's x value is: ${pt.x} and y value is: ${pt.y} `)
}

printCoord({ x: 10, y: 30 })

/**
 * We can actually use a type alias to give a name to any type at all, not just an object type
 * For example, a type alias can name a union type 
 */

type ID = number | string


/**
 * Noe that aliases are only aliases - we cannot use type aliases to create diff/distnic version
 * of the same type . When you use the alis, it's exactly as if you had written the aliased type. 
 * In other words, this code might look illegal , but is OK according to TypeScript becuase both types are alases for the same type
 */


/**
 * Type Script becuase both types are alises for the same type 
 */

declare function getInput(): string
declare function sanitize(str: string): string

type UesrInputSanitizedString = string;
function sanitizeInput(str: string): UesrInputSanitizedString {
    return sanitize(str)
}

//create a sanitized input 
let userInput = sanitizeInput(getInput());
//Can still be reassigned with a string though 
userInput = 'newInput '

