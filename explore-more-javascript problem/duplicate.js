const names = ["abul", "babul", "kabul", "cabul", "mithun", "kabul", "netil", "abul", "bro", "shanto", "bro"];
function removeSimilarNames(names){
    // function er moddhe ekta faka array declare korte hobe
    const unique = [];
    // ei faka array er moddhe 1 er odik number thakbe
    for(let i = 0; i< names.length; i++){
     const elements = names[i];
     console.log(elements);
     if(unique.includes(elements) === false){
        // eki name asle mane true hole ar ekoi name gulo dukhbe na
         unique.push(elements);
     }
    }
    return unique;
}
const callFunction = removeSimilarNames(names);
console.log(callFunction);