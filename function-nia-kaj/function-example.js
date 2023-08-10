function averageMarks(assignment1, assignment2, assignment3){
   var total = assignment1 + assignment2 + assignment3;
   var average = total / 3;
   return average;
}
var assignment1 = 60;
var assignment2 = 58;
var assignment3 = 59;
var myAverage = averageMarks(assignment1, assignment2, assignment3);
console.log("totalAverage:",myAverage);
// debug korar somoi all time full screen korte hobe
// value gulo newar jonno red dot er upor double click kore visible korte hbe tahole sekhan theke select hobe
// then F10 click kore value gulo select korbo , function er moddhe dukhar jonno f11 select korbo
function addSum(num1, num2){
    var totalSum = num1 + num2;
    return totalSum;
}
var firstPerson = addSum(25, 30);
var secondPerson = addSum(40, 33);
var Averagetotal = addSum(firstPerson, secondPerson);
console.log("totalNumber:", Averagetotal);