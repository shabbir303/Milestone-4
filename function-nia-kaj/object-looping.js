var problemFixed ={
    timeManagement: 70,
    workHard: 80,
    sleepy:50,
    gotoPlay:10,
    watchAnotherthing:70,
}
// object and array er maje main difference holo , object e amara eksathe value and proporities gulo likhte pari , kintu array te kebol matro proporties guloi likhte pari
var myAllproblem = Object.keys(problemFixed);
console.log(myAllproblem);
var allValues = Object.values(problemFixed);
console.log(allValues);
// output e array er moto kore properities gulo dibe
//result: ['timeManagement','sleepy','gotoPlay','watchAnotherthing']
// ei array ke ekhon loop kora mane object kei loop kora
for(var i = 0; i< myAllproblem.length; i++){
     var problem = myAllproblem[i];
    // var myValue = problemFixed[problem];
    // value gulo ekisathe loop korar jonno , single value variable = objectName[single property/key variable]
    // console.log(problem,  myValue);
}

// for in loop
// value loop korar jonno
for(var problem in problemFixed){
    var myValue = problemFixed[problem];
    console.log(problem, myValue);
}
  
  
  
  

