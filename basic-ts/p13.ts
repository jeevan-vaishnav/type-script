// Interface
// An interface declaretion is another way as name to an  object type 
interface Obj {
    x: number,
    y: number
}
function Intre(thing: Obj) {
    console.log(`The x value is ${thing.x} and y value is ${thing.y}`)
}
Intre({x:10,y:20})

/**Just like when we used type alias above, the example works just as if we had used an
 * anonymous object type.
 * TS is only concerned with the structure of the value we passed to Intre - 
 * It only cares that it has the expcted properties. 
 * Being concerned only with the structure annd capabilites if typpes is why we call
 * type script a structurally typed system 
 */


/**
 * Diff between type alias and interface
 * Interface:
 * 1.Extending an interface
 * 2.interface Animal{name:string}
 * 3.interface Bear extends Animal{
 * honney:boolean
 * }
 * 4.const bear  = getBear();
 * bear.name;
 * bear.honney;
 * Type:
 * 1.Extending type via intersection
 * 2.type Animal = {
 * name:string
 * }
 * 3.tyep Bear = Animal & {
 * honney:boolean
 * }
 * const bear = getBear();
 * bear.name;
 * bear.honney
 */



/**Adding new fields an exiting interfacen and typo
 * Interface:
 * interface Window{
 * titile:string
 * }
 * interface Window{
 * ts:TypeScriptAPI
 * }
 * 
 * const src = 'const a = "Hello World"';
 * window.ts.transpileModule(src, {});
 * A type cannot be changed after being created
 * type Window = {
 * title: string;}
 * type Window = {
 * ts: TypeScriptAPI;
 * }
 * // Error: Duplicate identifier 'Window'.
 */

