function findLargestArray(number){
    let largest = number[0];
   for(let i = 0; i< myArray.length; i++){
    // let largest = number[0]; loop er moddhe eta set kora jabe na tahole largest no loop hote thakbe exact value ta thakbe na change hote thakbe
     const index = i;
     const element = number[index];
    //  console.log(element);
     if(element > largest){
         largest = element;
     }
    //  return largest; loop er vitor thke return korle exact value aasbe na
   }
   return largest
}
const myArray = [55, 48, 132, 67, 89, 190, 235];
const tallest = findLargestArray(myArray);
console.log(tallest);