const lyrics ="tmi bondo KalA, pakhi ami jeno ki , bosonto kale tmai, vulte pari ni";
// console.log(lyrics);
// string ta venge vag korbo
const parts = lyrics.split(" ");
// khali jaiga gulo die alada hobe
console.log(parts);
//output: [
//   'tmi',     'bondo',
//   'KalA',    'pakhi',
//   'ami',     'jeno',
//   'ki',      ',',
//   'bosonto', 'kale',
//   'tmai',    'vulte',
//   'pari',    'ni'
// ] alada alda kore array er moto create kore felece

const sentences = lyrics.split(",");
console.log(sentences);
// output: [
//     'tmi bondo KalA',
//     ' pakhi ami jeno ki ',
//     ' bosonto kale tmai',
//     ' vulte pari ni'
//   ]
  
// every character alada korar jonno
const char = lyrics.split("");
console.log(char);

// string ta kata kati korar jonno (slice use korbo)
const partial = lyrics.slice(0, 9);
// ekhane duita parameter ace star and end. start holo kotha theke index ta suru hoice and end kon porjonto ami index ta katbo. ekhane jotono porjonto index dibo tar ager no porjonto slice korbe
console.log(partial);
// r ek ta solution kora jai substring die, eta slice er motoi same
const partial1 = lyrics.substring(0, 9);
console.log(partial1);

// ekta string er sathe ar ekta string jora/ add korte concate use kra hoi
const str1 = "hellow";
const str2 = "world";
const addStr = str1.concat(" ", str2);
console.log(addStr);
// kono string er line er majkhane kicu add korte chaile
const lines = [
    'tmi bondo KalA',
    ' pakhi ami jeno ki ',
    ' bosonto kale tmai',
    ' vulte pari ni'
  ]
  const newTopic = lines.join(":");
// every line er majkhane : add hoe jabe
console.log(newTopic);