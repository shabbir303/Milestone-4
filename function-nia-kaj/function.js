function myClass(Year,Year1){
    // ekta function evabe call korte hoi
    // ekhane year holo function er parameter
    // year , year1 sudu matro function er moddhe likha jabe and eder value function er baire excute er vitore likhte hobe
    console.log(" I started my school Journey :",Year);
    console.log(" I finished my school life :",Year1);
}
// myClass(2004, 2014);
// evabe function excute korte hoi/mane output er jonno evabe likhe hoi
// ekhane alada vabe variable er value die function excute kora jai
var started = 2004;
var ended = 2014;
myClass(started, ended);
// parameter er value na dile undefined dekhabe

function add(a, b, c, d, e){
    console.log("addition all of these parameters:",a, b, c, d, e);
    var sum = a + b + c + d + e;
    console.log(sum);
}
var a = 14;
var b = 23;
var c = 55;
var d = 49;
var e = 78;

add(a , b, c, d, e);
// subgulo parameter call korar por sum variable auto call hoe jabe
