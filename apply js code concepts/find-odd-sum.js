function getSumOfanArray(numbers){
    let sum = 0;
  for(let i = 0; i<numbers.length; i++){
    const index = i;
    const element = myNumbers[index];
    sum += element;
    console.log(index , element , sum);
  }
}
// find odd number of an array
function getOddNumberofanArray(numbers){
    const oddNumbers=[];
   for(let i= 0; i<numbers.length; i++){
      const index = i;
      const element = numbers[index];
      if(element %2 !== 0){
        console.log(index, element);
        oddNumbers.push(element);
      }
   }
   return oddNumbers;
}

const myNumbers = [12, 65, 45, 78, 102, 11, 71, 52];
// const printThisArray = getSumOfanArray(myNumbers);
const printOddNumber = getOddNumberofanArray(myNumbers);
console.log("Odd number array", printOddNumber);