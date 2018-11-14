const geo = require("./geometry");
const uti = require("./utilities");

console.log("This tests are for geometry file:");
//Method volumeOfRectangularPrism
console.log("This is for Method volumeOfRectangularPrism:");
//test case 1
try{
    console.log(geo.volumeOfRectangularPrism(1,4,5));
}catch(e){
    console.log(e);
}
//test case 2
try{    
    console.log(geo.volumeOfRectangularPrism("1",2,3));
}catch(e){
    console.log(e);
}
//test case 3
try{
    console.log(geo.volumeOfRectangularPrism(-1,2,3));
}catch(e){
    console.log(e);
}
//test case 4
try{
    console.log(geo.volumeOfRectangularPrism(30000000000,2,3));
}catch(e){
    console.log(e);
}
//test case 5
try{
    console.log(geo.volumeOfRectangularPrism(2,3));
}catch(e){
    console.log(e);
}


//Method surfaceAreaOfRectangularPrism
console.log("This is for Method surfaceAreaOfRectangularPrism:");
//test case 1
try{
    console.log(geo.surfaceAreaOfRectangularPrism(1,4,5));
}catch(e){
    console.log(e);
}

//test case 2
try{
    console.log(geo.surfaceAreaOfRectangularPrism("1",4,5));
}catch(e){
    console.log(e);
}

//test case 3
try{
    console.log(geo.surfaceAreaOfRectangularPrism(-1,4,5));
}catch(e){
    console.log(e);
}

//test case 4
try{
    console.log(geo.surfaceAreaOfRectangularPrism(18000000,4,5));
}catch(e){
    console.log(e);
}

//test case 5
try{
    console.log(geo.surfaceAreaOfRectangularPrism(5));
}catch(e){
    console.log(e);
}

//Method volumeOfSphere
console.log("This is for Method volumeOfSphere:");
//test case 1
try{
    console.log(geo.volumeOfSphere(5));
}catch(e){
    console.log(e);
}

//test case 2
try{
    console.log(geo.volumeOfSphere(-5));
}catch(e){
    console.log(e);
}

//test case 3
try{
    console.log(geo.volumeOfSphere("5"));
}catch(e){
    console.log(e);
}

//test case 4
try{
    console.log(geo.volumeOfSphere());
}catch(e){
    console.log(e);
}

//test case 5
try{
    console.log(geo.volumeOfSphere(2225));
}catch(e){
    console.log(e);
}

//Method surfaceAreaOfSphere
console.log("This is for Method surfaceAreaOfSphere:");
//test case 1
try{
    console.log(geo.surfaceAreaOfSphere(5));
}catch(e){
    console.log(e);
}

//test case 2
try{
    console.log(geo.surfaceAreaOfSphere(-5));
}catch(e){
    console.log(e);
}

//test case 3
try{
    console.log(geo.surfaceAreaOfSphere("5"));
}catch(e){
    console.log(e);
}

//test case 4
try{
    console.log(geo.surfaceAreaOfSphere());
}catch(e){
    console.log(e);
}

//test case 5
try{
    console.log(geo.surfaceAreaOfSphere(522));
}catch(e){
    console.log(e);
}





console.log("This tests are for utilities file:");
// //Method deepEquality
// //test case 1
// const first = {a: 2, b: 3};
// const second = {a: 2, b: 4};
// try{
//     console.log(uti.deepEquality(first, second));
// }catch(e){
//     console.log(e);
// }


//Method uniqueElements
//test case 1
try{
    console.log(uti.uniqueElements());
}catch(e){
    console.log(e);
}

//test case 2
try{
    console.log(uti.uniqueElements(-1));
}catch(e){
    console.log(e);
}

//test case 3
try{
    console.log(uti.uniqueElements("1"));
}catch(e){
    console.log(e);
}

//test case 4
try{
    console.log(uti.uniqueElements([1,2,3]));
}catch(e){
    console.log(e);
}

//test case 5
try{
    console.log(uti.uniqueElements([1,2,2,3,4,5,5,5]));
}catch(e){
    console.log(e);
}

//Method countOfEachCharacterInString
console.log("This is for Method countOfEachCharacterInString:");
//test case 1
try{
    console.log(uti.countOfEachCharacterInString("Hello, the pie is in the oven"));
}catch(e){
    console.log(e);
}

//test case 2
try{
    console.log(uti.countOfEachCharacterInString());
}catch(e){
    console.log(e);
}

//test case 3
try{
    console.log(uti.countOfEachCharacterInString(1));
}catch(e){
    console.log(e);
}

//test case 4
try{
    console.log(uti.countOfEachCharacterInString("&&&"));
}catch(e){
    console.log(e);
}

//test case 5
try{
    console.log(uti.countOfEachCharacterInString(123123));
}catch(e){
    console.log(e);
}

console.log("This is for Method deepEquality:");
//Method deepEquality
//test case 1
try{
    console.log(uti.deepEquality({a: 2, b: 3}, {a: 2, b: 4}));
}catch(e){
    console.log(e);
}

//test case 2
try{
    console.log(uti.deepEquality({a: 2, b: 4},{a: 2, b: 4}));
}catch(e){
    console.log(e);
}

//test case 3
try{
    console.log(uti.deepEquality({a: 2, b:4,c:5 },{a: 2, b: 4}));
}catch(e){
    console.log(e);
}


//test case 4
try{
    console.log(uti.deepEquality({a: 2,b:4}));
}catch(e){
    console.log(e);
}

//test case 5
try{
    console.log(uti.deepEquality({a: 2, b: 4},{a: 2,b:"4"}));
}catch(e){
    console.log(e);
}
//test case 6
try{
    console.log(uti.deepEquality(1,{a: 2,b:"4"}));
}catch(e){
    console.log(e);
}

//test case 7
try{
    console.log(uti.deepEquality({b:"4",a: 2},{a: 2,b:"4"}));
}catch(e){
    console.log(e);
}




