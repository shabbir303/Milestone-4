function wordReverseMethod(text){
    // for(let i = text.length -1; i>= 0; i--){
        const result = [];
      const str = text.split(' '); 
    //   ekhane amara ekti arry paici , ei array ke reverse korbo
    //   console.log(str); 
    for(let i = str.length -1; i>= 0; i--){
         const element = str[i];
         result.push(element); 
    }
    // console.log(result);
    const reversed = result.join(" ");
    // jeita die split korci oita die join korte hobe
    return reversed;
    }
// }
const myWord = "I love my Country";
const reversed = wordReverseMethod(myWord);
console.log(reversed);
