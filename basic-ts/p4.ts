// Generics

// Generics provide variables to types. A common example is an array. An array without generics could contain anything. 
// An array with generics can describe the values that the array contains.

type StringArray = Array<string>
type NumberArray = Array<number>
type ObjectWithNameArray = Array<{ name: string }>




//We can declare our own types that use generics 
interface Backpack<Type> {
    add: (obj: Type) => void
    get: () => Type
}

//This line is a shortcut to tell TS there is constant backpack add to not worry about where it come from 
declare const backpack: Backpack<string>;


//object is a string , becuase we decalred it above as the variable part of Backpack
const object = backpack.get();

//Since the backpack varibale is a string , you can't pass a number to the add function 
backpack.add(23);
// Argument of type 'number' is not assignable to parameter of type 'string'.
