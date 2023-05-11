//Not recommended as the type info about input parameter
function identity(arg) {
    return arg;
}
//Better way
function identity2(arg) {
    //Type info is not lost, same type is being taken and returned
    return arg;
}
const score = [];
const names = [];
//Modern writing
function ID4(val) {
    return val;
}
const newB = {
    brand: "Coke",
    type: 3
};
//Type can be anything
function identity4() {
    const myBottle = { brand: 'MyBrand', type: 1 };
    return myBottle;
}
//In JS version its a simple object getting returned
console.log(identity4());
