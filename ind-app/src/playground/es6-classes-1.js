class Person {
  constructor(name = 'Anonymous', age = -1) {
    this.name = name;
    this.age = age;
  }
  getGretting() {
    return `Hello, ${this.name}`;
  }
  getDescription() {
    return `I think that ${this.name} is ${this.age} year(s) old!`;
  }
}

const me = new Person('Iurii Lopatenko', 34);
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());
