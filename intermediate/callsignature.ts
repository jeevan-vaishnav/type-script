/**Call Sinatures */
// type AddType = {
//     (a: number, b: number): number,
//     (a: number, b: number, c: number): number,
//     debug?: string
// }
// const AddFun: AddType = (a: number, b: number, c?: number) => {
//     return a + b + (c != null ? c : 0);
// };

// AddFun.debug = "Addition Function"
// console.log(AddFun.debug);
// console.log(AddFun(4, 5, 10))

/**PointCreator */

type PointCreator = {
    new(x: number, y: number): { x: number, y: number },
    new(x: number, y: number, z?: number): { x: number, y: number, z?: number },
    debug?: string
}
const Point: PointCreator = class {
    static debug = "class hai"
    constructor(public x: number, public y: number) {
        // this.debug
        this.x = x
        this.y = y
    }
}

const p1 = new Point(1, 2)
console.log(Point.debug = "yes this is class")
console.log(p1)









