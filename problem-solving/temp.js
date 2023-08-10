// approach 1
let first = 5;
let second = 7;
console.log(first , second);
// first and second er value exchange korbo
// ejonno amader temp use korte hobe
// const temp = first;
// temp use korar koarone 1st er value ta store kore rakaha hoi
// ekarone amara second value ta amra temp er valuer equal kore dei
//  first = second;
//  second = temp;

// approach 2--- destructuring
[first, second] = [ second, first]
 console.log(first, second);
