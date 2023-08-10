// power related problem
// power ke short form e pow bola hoi
const lightSpeed = Math.pow(3, 8);
// 1st er value ta samne thakbe and last er value ta power hisebe thakbe
console.log(lightSpeed);
// ----------------------------------------------------------------------------------
const num1 = 25;
const num2 = 45;
const gap = Math.abs(num1 - num2);
// ekhane thik moto count korte parbe na karon 1st number coto and num2 boro 
// eta thik korar jonno Math.abs use korte hobe , thole absolute value dibe
if(gap < 5){
    console.log("You guys can be friends");
}
else{
    console.log("you guys can be apart");
}
// --------------------------------------------------------------------------------

const number1= 4.56;
console.log(Math.round(number1));
// result = 5
// number1 jodi 0.5 er ba 0.5 er upore thake tahole round kore er upore asbe
console.log(Math.ceil(number1));
// jei no e thakouk upurre jabe
console.log(Math.floor(number1));
// jei no e tahkuk niche asbe
console.log(Math.random());
// randomly number dite thkbe kono input carai (0-1) er moddhe
// ar 1-100 er moddhe kono random number drkr porle
console.log(Math.random()* 100);
// purno number pawar jonno
console.log(Math.round(Math.random()* 100));
// tahole randomly purno number asbe

// 20 bar ludur cokka
for(let i = 0; i<=20; i++){
    const random = (Math.round(Math.random()* 6));
    console.log(random);
}