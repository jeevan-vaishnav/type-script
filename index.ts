/**never type */
const fail = (msg: string) => {
    throw new Error(msg);
}

const sing = function () {
    while (true) {
        console.log("Never gonna give you up")
        console.log("Never gonna let you down")
        console.log("Never gonna run around and desert you")
        console.log("Never gonna make your cry")
        console.log("Never gonna say goodbye")
        console.log("never gonna tell a lie and hurt you")
    }
}

let exampleNever: never;


type SquareA = {
    kind: "square",
    size: number,
}

type CircleA = {
    kind: "circle",
    radius: number
}

type ReactangleA = {
    kind: "reactangle",
    width: number,
    height: number
}

type ShapeA = | SquareA | ReactangleA | CircleA;

function areaA(s: ShapeA) {
    if (s.kind === 'square') {
        return s.size * s.size
    } else if (s.kind === "reactangle") {
        return s.width * s.height
    } else if (s.kind === "circle") {
        return Math.PI * (s.radius ** 2);
    }
    const _ensureAllCaseAreHandle: never = s;
    return _ensureAllCaseAreHandle

}