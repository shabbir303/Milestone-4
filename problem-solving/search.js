const lyrics ="tmi bondo KalA pakhi ami jeno ki , bosonto kale tmai vulte pari ni";
// string er moddhe kono alada kore word search korar jonno amara 
// const searchWords = lyrics.includes("bondo");
// lyrics.includes("jei word ta search korbo tar string"), word ta jodi thake thahole console (true) asbe and na thakle false asbe
// ekahne jei word gulo amara search korbo tara case sensetive 
// const searchWords1 = lyrics.includes("Bondo")
// console.log(searchWords1);
// result false asbe
// eta thik korte hole jar sathe tulona korbo ebong jare tulona korbo dutai lowercase kore dite hobe

const searchString = "KaLa";
const lyricsLowrCase = lyrics.toLowerCase();
const searchStinglower = searchString.toLowerCase();
const doExist = lyricsLowrCase.includes(searchStinglower);
console.log(doExist); 
// return: true
// ---------------------------------------

// array er moto lyrics keyword er index check korbo kivabe?
console.log(lyrics.indexOf("ami"));
// return 21;
// jei string ta nei seta jodi likhi
console.log(lyrics.indexOf("black"));
// result : -1; array er motoi result asbe

// er mane kono string er vitore jodi word gulo thkae tar value kokhono -1 hobe na

if(lyrics.indexOf("pari")!==-1){
    console.log("exist inside the string");
}
else{
    console.log("not exist inside the string");
}
// start with
console.log(lyrics.startsWith("tmi"));
// return: true;
console.log(lyrics.endsWith("ni"));
// return: true;