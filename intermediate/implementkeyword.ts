console.log("Implment Keyword");
type localAnimal = {
    name: string,
    voice(): string
}
function logAnimal(locAnimal: localAnimal) {
    console.log(`animal ${locAnimal.name} and voice ${locAnimal.voice()}`)
}

function voiceA(): string {
    return "wow"
}
logAnimal({ name: "Cat (w/o class)", voice: voiceA });

// lets try to implements incorrectly
class CatA implements localAnimal {
    constructor(public name: string) { }
    voice(): string {
        return "wow"
    }
}

class DogA implements localAnimal {
    constructor(public name: string) { }
    voice(): string { return "woof" }
}

logAnimal(new CatA("Cat by class"))
logAnimal(new DogA("Dog by class"))

