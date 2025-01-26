//Double Assertion
type Point2D = {x:number,y:number}
type Point3D = {x:number,y:number,z:number}
type PersonD = {name:string,email:string,age:number}

let point2D: Point2D = {x:10,y:20}
let point3D : Point3D = {x:10,y:50,z:60}
let personD:PersonD = {name:"john",email:'nobody@gmail.com',age:10}

// point3D = point2D // error 
point2D = point3D // 
point3D = point2D as Point3D // Ok i trust you 

// personD = point2D // error
// personD = point3D // error
// point3D = personD as Point3D // Error: I don't trust you enough 
point2D = personD as unknown as Point3D // Ok i double trust
