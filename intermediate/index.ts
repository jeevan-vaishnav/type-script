// Dealing with temporal uncertainty


let suffix: string | null = getSuffix();

if (suffix != null) {

    let exampleLocal = suffix
    let exampleOne: string = 'jeevan' + exampleLocal.toLowerCase();

    ['jeevan', 'vaishnav'].forEach((name) => {
        let exampleTwo: string = name + exampleLocal.toLowerCase();
    })
}

let exampleAnother: string | null = forExample()
if (example != null) {
    const exampleLocal = exampleAnother
    setTimeout(() => {
        console.log(exampleLocal.toUpperCase())
    })
}

exampleAnother = null;