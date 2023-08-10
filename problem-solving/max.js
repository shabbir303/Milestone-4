// who will get the cake in jim and dela
// const jim = 85;
// const dela = 69;
// if(jim> dela){
//     console.log("jim will get the delicious cake");
// }
// else{
//     console.log("dela will get the delicius cake");
// }
// output: jim will get the delicious cake


// who will get the cake jim = 85, dela = 96, chinku = 77;
const jim = 85;
const dela = 96;
const chinku = 77;
if(jim> dela && jim> chinku){
    console.log("jim will get the cake");
}
else if(dela>jim && dela> chinku){
    console.log("dela will get the cake");
}
else{
    console.log("chiknu finally get the cake");
}
// output: dela will get the cake

//  egula amra arekvabe check korte pari , math.max() nie . ekhane amra onek value use korte pari
const getTheMax = Math.max(85, 96, 77);
console.log(getTheMax);
const getTheMin = Math.min(85, 77, 96);
console.log(getTheMin);