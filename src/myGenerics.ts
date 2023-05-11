//Not recommended as the type info about input parameter
function identity(arg: any): any {
    return arg
}

//Better way
function identity2<Type> (arg: Type): Type {
    return arg
}

const score: Array<number> = []
const names: Array<string> = []