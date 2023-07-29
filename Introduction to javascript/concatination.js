var price1 = 12;
var price2 = "14";
// jehetu 14 string hoe gece eta 12 er por asbe pasapasi
var totalPrice = price1 + price2;
// ekta string er sathe arekta string add korake concatination bola hoi
console.log(totalPrice);
// result:1214

// convert string to number
// output e string white color and number yellow color hobe
// kono ekta jinis ke string to number convert korte hole amre (parseInt) use korbo
// parseInt sudumatro Int/purno number hote hobe3
var price2Number = parseInt(price2);
console.log(price2Number);

var gpa = "3.41";
// var gpaNumber = parseInt(gpa);
// console.log(gpaNumber);
// ekhane dosomik(.) er porer kono number ase na sudu matro Int/purno number ase
// dosomik er porer number ante chaile amader float korte hobe
var gpaNumber = parseFloat(gpa);
console.log(gpaNumber);