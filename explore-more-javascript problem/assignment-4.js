
function cubeNumber(number) {
    if(typeof number !== "number"){
        console.log("please input a number");
    }
    const result = Math.pow(number, 3);
    return result;
    
}



function matchFinder(string1, string2) {
    if(typeof string1  !== "string" || typeof string2  !== "string"){
        return "please provide me a string";
    }
    else if(string1.includes(string2)){
        return true;
    }
    else{
        
        return false;
    }
}



function sortMaker(arr) {
    if(typeof arr[0] !== "number"||typeof arr[1] !== "number" ){
        return "please put a number in an array";
    }
    if (arr[0] < 0 || arr[1] < 0) {
      return "Invalid Input";
    } else if (arr[0] === arr[1]) {
      return "equal";
    } else {
      return [arr[1], arr[0]];
    }
  }
  


function findAddress(obj) {
    if(typeof obj !== "object"){
        return "please give me an object";
    }
    else {
        const street = obj.street || "__";
        const house = obj.house|| "__";
        const society = obj.society|| "__";
        
        return street + "," + house+"," + society;
    }
}



function canPay(changeArray, totalDue) {
    if(typeof changeArray[0] !== "number"||typeof changeArray[1] !== "number"||typeof changeArray[2] !== "number"){
        return " Put here a valid number";
    } 
    else if(changeArray[0].length === 0){
        return "put here a number";
    }
    else if(changeArray[0] + changeArray[1] + changeArray[2] === totalDue){
        return true;
    }
    else{
        return false;
    }
}


