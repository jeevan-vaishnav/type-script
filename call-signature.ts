// Call Signature
type Add = {
    (a: number, b: number): number,
    (a: number, b: number, c: number): number,
    debugName?: string
};

const add: Add = (a: number, b: number, c?: number) => {
    return a + b + (c != null ? c : 0);
}

add.debugName = 'Addition Function'
console.log(add(10, 20));
console.log(add(10, 20, 30));

//Lets example

type PointClass = {
    new(x: number, y: number): { x: number, y: number }
    new(x: number, y: number, c: number): { x: number, y: number, c: number }
    (x: number, y: number): { x: number, y: number }
    (x: number, y: number): { x: number, y: number }
    debugName?: string
}

