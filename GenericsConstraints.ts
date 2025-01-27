// Generic Constraints

type NameFields = {firstName:string,lastName:string}

function addFullName<T extends NameFields>(obj:T):T & {fullname:string} {
    return {
        ...obj,
        fullname:`${obj.firstName} ${obj.lastName}`
    }
}

const john = addFullName({
    email:"john@gmail.com",
    firstName:'John',
    lastName:'Doe'
})

console.log(john.email)// john@gmail.com
console.log(john.firstName)// John Doe

const Jane = addFullName({firstName:'jane',lastName:'Doe'})
console.log(Jane)