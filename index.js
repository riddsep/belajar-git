class Robot {
  constructor(name, color, weight) {
    this.name = name;
    this.color = color;
    this.weight = weight;
  }
}

class Person {
  constructor(name, birthYear, religion) {
    this.name = name;
    this.birthYear = birthYear;
    this.religion = religion;
  }

  greeting() {
    return `Hello my name is ${this.name}. Im born in ${this.birthYear} and im a ${this.religion}`;
  }
}

const tom = new Robot("Tom", "Black", 30);
const jerry = new Robot("Jerry", "Black", 30);
const rido = new Person("Rido Septiawan", 2001, "Islam");
rido.robotOwned = tom;
tom.follow = jerry;
jerry.follow = tom;

const ridoTom = rido.robotOwned.name;
console.log(ridoTom);
