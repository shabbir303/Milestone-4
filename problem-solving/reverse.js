// string hole ek dhoroner array. check solit-join.js
function reverseStringText(text){
//    for(let i = 0; i < text.length; i++){
    // jehetu amara reverse way te chalabo tahole evabe loop korle hobe na
    let reversed = "";
     for(let i = text.length -1; i>= 0;i--){
        // ekhane 1st er ta undefined asbe karon last element er index kintu 1 kom karom index suru hoi 0 die. tahole amader text.length = dile tar sathe -1 add kore dite hobe
     const index = i;
     const element = text[index];
    //  console.log(element);
    reversed = reversed + element;
    console.log(element,  reversed);
   }
   return reversed;
}
const myText = "mon mane na hai";
const findThis = reverseStringText(myText);
console.log("reversed Output:", findThis);
