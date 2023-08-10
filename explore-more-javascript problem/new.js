// 3
function sortMaker(arr) {
    if (arr.length !== 2 || typeof arr[0] !== 'number' || typeof arr[1] !== 'number') {
        return "Invalid Input";
    }

    const [num1, num2] = arr;

    if (num1 > 0 || num2 > 0) {
        return  ;
    } else {
        return "Invalid Input";
    }
    //  else if(num1 = num2){
    //     return "equal";
    // }
}

// Test cases
// console.log(sortMaker([3, 1]));     // Output: [3, 1]
// console.log(sortMaker([5, 5]));     // Output: "equal"
// console.log(sortMaker([-2, 7]));    // Output: "Invalid Input"
// console.log(sortMaker([0, 4]));     // Output: [4, 0]
// console.log(sortMaker([6, "hello"]));// Output: "Invalid Input"

function sortMaker(arr) {
    if (arr.length !== 2 || typeof arr[0] !== 'number' || typeof arr[1] !== 'number') {
        return "Invalid Input";
    }

    const [num1, num2] = arr;

    if (num1 > 0 || num2 > 0) {
        return num1 === num2 ? "equal" 
        : [Math.max(num1, num2), Math.min(num1, num2)];
    } else {
        return "Invalid Input";
    }
}

// Test cases
console.log(sortMaker([3, 1]));     // Output: [3, 1]
console.log(sortMaker([5, 5]));     // Output: "equal"
console.log(sortMaker([-2, 7]));    // Output: "Invalid Input"
console.log(sortMaker([0, 4]));     // Output: [4, 0]
console.log(sortMaker([6, "hello"]));// Output: "Invalid Input"
