console.log('hello from es6-arrow-function-2.js!');

//Arguments object - no longer bound with arrow functions
//
//ES5 function
const add = function (a, b) {
  console.log(arguments);
  console.log(
    `You want to know how much will be ${a} plus ${b} .... I think it should be something like ${
      a + b
    }`
  );
};
add(5, 7);

//ES6 function
let add2 = (a, b) => {
  //console.log(arguments); there will be an error!
  console.log(
    `You want to know how much will be ${a} plus ${b} .... I think it should be something like ${
      a + b
    }`
  );
};
add2(300, 505);

//THAT in ES5
console.log('THAT in ES5');
const userThat = {
  name: 'Iurii',
  cities: ['Moscow', 'Los Angeles'],
  printPlaces: function () {
    console.log(this.name);
    console.log(this.cities);
    const that = this;
    this.cities.forEach(function (city) {
      console.log(that.name + ' has lived in ' + city);
    });
  },
};
userThat.printPlaces();

/* //THIS in ES5
console.log('THIS in ES5');
const userThis = {
  name: 'Iurii',
  cities: ['Moscow', 'Los Angeles'],
  printPlaces: function () {
    console.log(this.name);
    console.log(this.cities);
    this.cities.forEach(function (city) {
      console.log(this.name + ' has lived in ' + city); //there will be an error
    });
  },
};
userThis.printPlaces(); */

//THIS in ES6
console.log('THAT in ES6');
const userThisES6 = {
  name: 'Iurii',
  cities: ['Moscow', 'Los Angeles'],
  printPlaces: function () {
    console.log(this.name);
    console.log(this.cities);
    this.cities.forEach((city) => {
      console.log(this.name + ' has lived in ' + city);
    });
  },
};
userThisES6.printPlaces();

/* //THIS in ES6 - all arrow - ERROR!!!
console.log('THAT in ES6 - all arrow');
const userThisES6Arrow = {
  name: 'Iurii',
  cities: ['Moscow', 'Los Angeles'],
  printPlaces: () => {
    console.log(this.name);
    console.log(this.cities);
    this.cities.forEach((city) => {
      console.log(this.name + ' has lived in ' + city);
    });
  },
};
userThisES6Arrow.printPlaces(); */

//THIS in ES6 - no arrow - IT WORKS!!!
console.log('THAT in ES6 - no arrow');
const userThisES6NoArrow = {
  name: 'Iurii',
  cities: ['Moscow', 'Los Angeles'],
  printPlaces() {
    //TEST of MAP method
    console.log('Test:');
    const upperCase = this.cities.map(
      (city) => `${this.name.toUpperCase()} has lived in ${city.toUpperCase()}`
    );
    console.log(upperCase);
    //END of TEST

    console.log(this.name);
    console.log(this.cities);
    this.cities.forEach((city) => {
      console.log(this.name + ' has lived in ' + city);
    });
  },
};
userThisES6NoArrow.printPlaces();

//CHALLENGE
console.log('CHALLENGE');
const multiplier = {
  numbers: [5, 4, 7, 45, 46, 97, 125, 10, 5, 456],
  multiplyBy: 456,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  },
};
console.log(multiplier.multiply());
