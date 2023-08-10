const phones = [{
    name: "samsung",
    camera : "40mpx",
    battery: "500mah",
    ram: "36gb",
    rom: "120gb",
    display: "768mpx",
    price: 36000,
    color:"black"
},
{
    name: "oppo",
    camera : "18mpx",
    battery: "400mah",
    ram: "3gb",
    rom: "18gb",
    display: "728mpx",
    price: 16000,
    color:"blue"
},
{
    name: "Nokia",
    camera : "20mpx",
    battery: "400mah",
    ram: "3gb",
    rom: "18gb",
    display: "728mpx",
    price: 26000,
    color:"blue"
},
{
    name: "symphony",
    camera : "15mpx",
    battery: "400mah",
    ram: "3gb",
    rom: "18gb",
    display: "728mpx",
    price: 10000,
    color:"blue"
},
{
    name: "Xomi",
    camera : "10mpx",
    battery: "400mah",
    ram: "3gb",
    rom: "18gb",
    display: "728mpx",
    price: 22000,
    color:"blue"
}];

function findHighestCamera(phones){
    let highestCamera = phones[0];
    for(let i = 0; i< phones.length; i++){
        const phone = phones[i];
        // console.log(phone);
        if(phone.camera > highestCamera.camera){
             highestCamera = phone;
        }
    }
    return highestCamera;
}
const mySelection = findHighestCamera(phones);
console.log("My phone", mySelection);