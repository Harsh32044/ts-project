//Not recommended as the type info about input parameter
function identity(arg: any): any {
    return arg
}

//Better way
function identity2<Type> (arg: Type): Type {
    //Type info is not lost, same type is being taken and returned
    return arg
}

const score: Array<number> = []
const names: Array<string> = []

//Modern writing
function ID4<T>(val: T): T {
    return val
}

//Advantage is, we can pass on our own types, defined via Interfaces

interface Bottle {
    brand: string,
    type: number
}

const newB: Bottle = {
    brand: "Coke",
    type: 3
}
//Type can be anything
function identity4<Type>(): Type {
    
    const myBottle: Type = { brand: 'MyBrand', type: 1 } as Type
    return myBottle
}
//In JS version its a simple object getting returned
console.log(identity4())