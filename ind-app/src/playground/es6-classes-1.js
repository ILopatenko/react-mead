//Create a class Persone
class Person {
  constructor(name = 'Anonymous', age = -1) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hello, ${this.name}`;
  }
  getDescription() {
    return `I think that ${this.name} is ${this.age} year(s) old!`;
  }
}
console.log('PERSONS');
//Create a new instance of class Person
const me = new Person('Iurii Lopatenko', 34);
//LOG result of executing method getDescription() of me
console.log(me.getDescription());

console.log('STUDENTS');
class Student extends Person {
  constructor(name, age, major) {
    //add all the data from parent constructor
    super(name, age);
    //add additional properties
    this.major = major;
  }
  //Add a new method
  hasMajor() {
    return !!this.major;
  }
  //Change a method from parent
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) description += ` Their major is ${this.major}`;
    return description;
  }
}
const meStudent = new Student('Iurii Lopatenko', 34, 'mining science');
console.log(meStudent.getDescription());

console.log('TEST TASK: TRAVELER');
class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greet = super.getGreeting();
    if (!!this.homeLocation) {
      greet += `. You are located at ${this.homeLocation}`;
    }
    return greet;
  }
}

const testTraveler = new Traveler('Iurii Lopatenko', 34, 'Los Angeles');
console.log(testTraveler.getGreeting());
