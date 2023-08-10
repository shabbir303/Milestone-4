function make_avg(a , b, c){
    console.log(a, b, c);
   var total = a + b + c;
   var average = total / 3;
   return average;
}
var a = 25;
var b = 35;
var c = 10;
var finalResult = make_avg(a , b, c);

var fixedKoro = finalResult.toFixed(2);
console.log(fixedKoro);
var nuKoro = parseInt(fixedKoro);
console.log(nuKoro);
console.log("thik thkar kotha:", finalResult);


// function movie(){
//     return "Din-The day";
//     return "Poran";
//     return "Hawa";
//    }
//    console.log(movie());