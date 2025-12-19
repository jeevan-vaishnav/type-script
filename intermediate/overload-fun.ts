// function overload 
// this two signature not part of java script 
function reverseOverload(string: string): string;
function reverseOverload(string: string[]): string[]

// this is the one body function to handle one case of overload
function reverseOverload(stringOrStringArray: string | string[]) {
    if (typeof stringOrStringArray === 'string') {
        return stringOrStringArray.split('').reverse().join();
    } else {
        return stringOrStringArray.slice().reverse();
    }
}

console.log(reverseOverload('hello'))
console.log(reverseOverload(['h', 'e', 'l', 'l', 'o']))

// lets dems with other example 

function makeDateFun(timestampOrYear: number, month?: number, day?: number): Date {
    if (month != null && day != null) {
        return new Date(timestampOrYear, month - 1, day);
    } else {
        return new Date(timestampOrYear)
    }
}

const first = makeDateFun(2000, 10, 14)
console.log(first)
const second = makeDateFun(2000);
console.log(second)
const third = makeDateFun(2000, 1)
console.log(third)
const epoc = makeDateFun(0);
console.log(epoc)
