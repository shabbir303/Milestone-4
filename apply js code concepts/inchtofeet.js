// const myInch = 12;
// const myFeet = myInch/12;
// console.log(myFeet);

// dada Inch
// const dadaInch = 144;
// const dadaFeet = dadaInch/12;
// console.log("dadar feet:", dadaFeet);

function inchestoFeet(inches){
    const feet = inches/12;
    return feet;
}
const dadaInch = 144;
const dadaFeet = inchestoFeet(dadaInch);
console.log("Dadar Feet:", dadaFeet);

const nanaInch = 168;
const nanaFeet = inchestoFeet(nanaInch);
console.log("nanar feet:", nanaFeet);

const myInch = 72;
const myFeet = inchestoFeet(myInch);
console.log("amar feet:", myFeet);
// ekivabe mile to kilometer, kilometer to meter convert kora jabe

function miletoKilometer(miles){
    const kilometers = miles* 1.6;
    return kilometers;
}
const myMiles = 3;
const myKilometers = miletoKilometer(myMiles);

console.log("my travel area:", myKilometers);
// const setFixed = myKilometers.toFixed[2];
// console.log(setFixed);