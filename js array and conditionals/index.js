// we access array element in these index
var numbers = [45, 63, 71, 80, 405];
// numbers er jekono ekta element access korar jonno name er por [] bracket er moddhe position number ta likhbo
// etake bola hoi by index
// console.log(numbers[2]);
// terminal e uparrow click korle existing terminal er code tai on hobe. alada kore code likhar proijon nei
// var elementsSecond = numbers[1];
// console.log(elementsSecond);
// array er element er value change korar jonno
numbers[2] = 78;
// console.log(numbers);
// 3rd value tar man change hoe jabe 78 hoe jabe
// result:[ 45, 63, 78, 80, 405 ]
numbers[4] = 2;
// etake bola hoi set index
console.log(numbers);
// find index of element, mane koi no position e index value ta ace ta ver korte hbe
// var positionIndex = numbers.indexOf(80);

// var positionIndex = numbers.indexOf(78);
// console.log(positionIndex);
// kono ekta element array er modde na thkle tar value hobe -1
var positionIndex = numbers.indexOf(405);
console.log(positionIndex);
// logical operaton && and ||
