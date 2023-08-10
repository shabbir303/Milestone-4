// for(i = 0; i<=13; i+=2){
//     console.log("kmn aco");
//     console.log(i);
// }

// display every elements of an array
var numbers = [10, 45, 35, 76, 405,200, 800, 20];
for(var i=0 ; i< numbers.length; i++){
    // ekhane i<6 mane total 7 ta array index porjonto loop chalabe. er cheye besi chalabe na jodi thakeo
    // arry er sobgulo index er moddhe loop chalate chaile amra i< array(array er name).length chalabo
    // ekhane i dhara amra array er index set koreci
    // karon array start hoi 0 number index theke er por 1, 2, 3 evabe colte thake
    // every single item shuld be singular number
    var number = numbers[i];
    // ekhon sobgulo item por por dekha jabe
    console.log(number);
}