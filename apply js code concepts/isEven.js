// even number guloke 2 dara divide korle remainder 0 asbe ar odd number guloke divide korle reaminder 1 asbe
// function getOddNumber(number){
//     const remainder = number % 2;
//     if(remainder === 1){
//         console.log("this is odd number");
//     }
//     else{
//         console.log("this is even number");
//     }
// }
// const myNumber = 110;
// const checkThisNumber = getOddNumber(myNumber);

// another rules
function getEvenNumber(number){
    const reaminder = number % 2;
    if(reaminder === 0){
        return true;
    }
    else{
        return false;
    }
}
const herNumber = 100;
const checkTheNumber = getEvenNumber(herNumber);
console.log(checkTheNumber);