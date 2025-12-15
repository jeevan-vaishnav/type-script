//Index Signature
type PersonType = {
    displayName: string,
    email: string
}

type personDictionary = {
    [username: string]: PersonType
    jeevan:PersonType
}

const persons: personDictionary = {
    jeevan: { displayName: 'Jeevan Vaishnav', email: 'jeevan@gmail.com' }
}
persons['john'] = {displayName:'John Doe', email:'johndoe@gmail.com'}
console.log(persons['john'])
console.log(persons)

delete persons['john'];

console.log(persons['john'])
console.log(persons)
