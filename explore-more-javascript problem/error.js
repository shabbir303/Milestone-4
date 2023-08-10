function getMySum(num1, num2){
    if(typeof num1 !== "number"|| typeof num2 !== "number"){
        console.log("please put in a number")
    }
    return num1 + num2;
}
const myResult = getMySum(50 ,"45");
console.log(myResult);