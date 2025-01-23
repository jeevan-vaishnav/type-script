type Person =  {
    name:string,
    dateOfBirth?:Date
}

// A mock implementation of loadPerson, you can replace it with the real function
function loadPerson(): Person | null {
    return {
        name: "John Doe",
        dateOfBirth: new Date("1990-01-01")
    }
}


function assert(condition:unknown, message:string): asserts condition{
    if(!condition) throw new Error(message)
}

function assertDate(value:unknown) :asserts value is Date{
    if(value instanceof Date) return 
    else throw new TypeError('value is not a date')
}

const maybePerson = loadPerson();

assert(maybePerson != null, 'Could not load person')
console.log('Name:', maybePerson.name)

assertDate(maybePerson.dateOfBirth)
console.log('Date of Birth:', maybePerson.dateOfBirth.toISOString())

