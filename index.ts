// Simple print hello world 
let helloworld: string = "hello world"
console.log(helloworld)

// We can explicitly describe this objects shape using interface declaration
interface User {
    name: string,
    id: number
}

// Defining Types: create a object with inrefred type which includes string and number 
const user: User = {
    name: "jeevan",
    id: 10
}
console.log(user)
// Js supports classes and object-oriented programming , so does TS. We can use interface with classes 
interface ScriptUser {
    name: string,
    isTS: boolean
}

class UserAccount {
    name: string;
    isTS: boolean;

    constructor(name: string, isTS: boolean) {
        this.name = name
        this.isTS = isTS
    }
}
const ObjUser: ScriptUser = new UserAccount("jeevan", true);
console.log(ObjUser)

// TS Function : No errors
interface UserSample {
    name: string
}

function getUser(user: UserSample) {
    console.log(user);
}

getUser({ name: "Jeevan" });
