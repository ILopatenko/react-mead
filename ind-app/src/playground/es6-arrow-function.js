console.log('hello from es6-arrow-function.js!');

//ES5 function
const square = function (n) {
  return n * n;
};

function squareV2(x) {
  return x * x;
}

let result = square(25);
console.log('Result of ES5 function is: ', result);

//ES6 (ARROW) function
const square6 = (n) => n * n;
let result6 = square6(25);
console.log('Result of ES6 (ARROW) function is: ', result);

//test
let fullName = 'Iurii Lopatenko';
const getFirstName = (fullNAme) => fullName.split(' ')[0];
console.log(getFirstName(fullName));
