
function reverse(string: string): string
function reverse(string: string[]): string[]
// Function Overloading 
function reverse(stringOfStringArray: string | string[]) {
    if (typeof stringOfStringArray == 'string') {
        return stringOfStringArray.split('').reverse().join('')
    } else {
        return stringOfStringArray.slice().reverse();
    }
}

// string
console.log(reverse('jeevan'))
//string array
console.log(reverse(['j', 'e', 'e', 'v', 'a', 'n']))

//Another Example
function makeDate(timestamp:number):Date
function makeDate(year:number,month:number,day:number):Date
function makeDate(timesstampyear:number,month?:number,day?:number): Date {
    if(month != null && day != null){
        return new Date(timesstampyear,month - 1,day)
    }else{
        return new Date(timesstampyear)
    }
}

const doomsday = makeDate(2000,1,1) //1 Jan 2000
console.log(doomsday)
const epoch = makeDate(0) // 1 Jun 1970
console.log(epoch)
// const invalid = makeDate(2000, 1);
// console.log(invalid)