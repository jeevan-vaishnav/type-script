// Readonly Arrays and Tuples
function reverseSorted(input: readonly number[]):number[] {
    return input.slice().sort().reverse()
}

const start = [1,2,3,4,5,6]
const result = reverseSorted(start)
console.log(result)
console.log(start)

// Tuples Example
type PointP = readonly [number,number]

function move(point:PointP,x:number,y:number):PointP {
   
    return [point[0] + x,  point[1] + y];
}

const pointt :PointP = [0,0]
const moved = move(pointt,5,5)
console.log(moved)
console.log(pointt)