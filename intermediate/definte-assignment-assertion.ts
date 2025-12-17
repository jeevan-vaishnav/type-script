// Definte asignment assertion 

let diceA!: number

function DiceFun() {
    diceA = (Math.floor(Math.random() * 6) + 1)
}

DiceFun();
console.log("Dice is", diceA);

DiceFun();
console.log("Dice is ", diceA)

// example 2
class PointATest {
    x!: number;
    y!: number;
    constructor() {
        // this.x = Math.random();
        // this.y = Math.random();
        this.moveRandom();
    }
    moveRandom() {
        this.x = Math.random();
        this.y = Math.random();
    }
}