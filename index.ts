// Define Assignment Assertion

let dice!: number

function rollDice() {
    dice = (Math.floor(Math.random() * 6) + 1)
    console.log(Math.floor(Math.random() * 6) + 1)
}

rollDice();
// console.log(dice) //Variable 'dice' is used before being assigned.ts(2454)let dice: number
console.log("Currrent Roll: " + dice)
rollDice();
console.log("After Roll: " + dice)

