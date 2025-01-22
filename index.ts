//Implement keyword:
type Animal = {
    name: string;
    voice(): string
}


function log(animalName: Animal) {
    console.log(`The name is ${animalName.name} and vvoice is ${animalName.voice()}`)
}


class Cat implements Animal {

    constructor(public name: string) { }

    voice() { return 'meow' }

}


class Dog implements Animal {

    constructor(public name: string) { }

    voice() { return 'woof' }
}

log(new Cat('CAT'))
log(new Dog('DOG'))
