// function findAddress(obj) {
//     const name = obj.name || '__';
//     const address = obj.address || '__';
//     const phoneNumber = obj.phoneNumber || '__';

//     // const output = console.log(name, address, phoneNumber);
//     return (name, address, phoneNumber);
// }

// const person = {
//     name: 'Alice',
//     address: '123 Main St',
// };

// const result = findAddress(person);
// console.log(result);

function findAddress(obj){
    if(house = obj.house){
        return house;
    }
    else{
        return '__';
    }
}
function findAddress(obj){
    if(street = obj.street){
        return street;
    }
    else{
        return '__';
    }
}
function findAddress(obj){
    if(society = obj.society){
        return society;
    }
    else{
        return '__';
    }
}
const person = {
    street: 10,
    house: "15A",
    society: "EarthPerfect"
}
const result = findAddress(person);
console.log(result);