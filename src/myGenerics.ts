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

function getSearchProducts<T>(products: T[]): T {
    //do some DB ops
    const myIndex = 3
    return products[myIndex]
}

const getSearchProductsArrow  = <T,>(products: T[]) : T => {
    // do some DB Ops
    const myIndex = 3
    return products[myIndex] //Returning the value which has same Type as each elements in the products array
}
// <T,> is usually written in JSX syntax to differentiate from JSX elements
// typeof [1,2,3] >> 'object'
//typeof 1 >> 'number'
//typeof "harsh" >> 'string'