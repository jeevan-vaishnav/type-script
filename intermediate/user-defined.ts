// User Defined Type Gaurds
type Square = {
    size: number
}
type Rectangle = {
    width: number
    height: number
}
type Shape = Square | Rectangle

function isSquare(shape: Shape): shape is Square {
    return 'size' in shape
}

function isRectangle(shape:Shape): shape is Rectangle{
    return 'width' in shape
}

function area(shape: Shape) {

    if (isSquare(shape)) {
        console.log(isSquare(shape))
        return shape.size * shape.size
    }
    if (isRectangle(shape)) {
        return shape.width * shape.height
    }

    const _ensure: never = shape
    return _ensure
}

//Area of Squre
console.log(area({size: 10}))
//Area of Rectangle
console.log(area({ width: 100, height: 10 }))

