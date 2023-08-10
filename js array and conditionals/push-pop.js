var numbers = [58, 78, 143, 45];
// ei numbers er moddhe new ekta number push korte chai 
numbers.push(86);
console.log(numbers);
// result:[ 58, 78, 143, 45, 86 ]
var friends = ['balam', 'imran', 'porshi'];
friends.unshift('munir');
// push korle array er last e add hobe
// unshift korle array er 1st e add hobe
console.log(friends);
// again push korte parbo eki vabe
// friends.push('asif');
// console.log(friends);
// push er opposite hocce pop 
// push kono kicu dukai ar pop ta ber kore dei
var element = numbers.splice([2]);
// splice korle element er number dite hobe ebong jekhan theke splice korbo oi element er ager gulo remove hoe jabe
console.log(element);
// [ 143, 45, 86 ]
// shift korle 1st elemnt remove hoe jabe, pop korle last element remove hoe jabe
// push er moto pop 1 er besi bar kora jai
// numbers.pop();
// pop dile last theke auto ekta element ber hoe jabe, alada kore kicu declare kora lagbe na
// console.log(element);
// jei element ta ber hobe oi element er value dekhabe jodi amra notun kono variable e pop kori
// console.log(numbers);
// how to add or remove 1st element in javascript- google search