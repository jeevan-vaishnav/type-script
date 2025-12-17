// User Defined Type Gards
type SquareB = {
    size: number
}

type RectangleB = {
    width: number,
    heigth: number
}

type ShapeB = SquareB | RectangleB;


function isSquareB(shape: ShapeB): shape is SquareB {
    return 'size' in shape
}

function areaB(shape: ShapeB) {
    if (isSquareB(shape)) {
        console.log("Square")
        // console.log(shape.size)
        return shape.size * shape.size
    }

    if ('width' in shape) {
        console.log("Reactangle")
        // console.log(shape.width * shape.heigth)
        return shape.width * shape.heigth;
    }

    const _ensureAllCheckHandle: never = shape
    return _ensureAllCheckHandle

}

areaB({ 'size': 10 })
areaB({ 'width': 10, 'heigth': 30 })
// areaB({ 'width': 10, 'sizeA': 30 })

