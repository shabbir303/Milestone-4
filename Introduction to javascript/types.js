// kono ekta price number naki string ta janar jonno (typeof name) ta bosate hobe console e
var price1 = 14;
console.log(typeof price1);
// result: number
var price2 = 'shabbir';
console.log(typeof price2);
// result: string
var isHappy = true;
console.log(typeof isHappy);
// result : boolean
var romantic;
console.log(typeof romantic);
// result:undefined
// search google js data types
// primitive type- number ,string, undefined, null , boolean
// non-primitive type- object ,array ,function
var num1 = 0.1;
var num2 = 0.2;
var totalNum = num1 + num2;

// result:0.30000000000000004
// sob khetre eto boro value asbe na 
// etake fixed korar jonno mane kom dekhanor jonno
// name = name.toFixed(2);
// 2 mane je koi decimal porjonto dekhate chai
totalNum = totalNum.toFixed(1);
console.log(totalNum);
// result: o.3

// result:string
// etake number e nite hole
totalNum = parseFloat(totalNum);
console.log(typeof totalNum);
// result: number