// ===== Level 1: Animal, Dog, Cat Classes =====
class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  describe() {
    return `${this.name} is a ${this.color} animal, ${this.age} years old with ${this.legs} legs.`;
  }

  sound() {
    return `${this.name} makes a generic animal sound.`;
  }
}

class Dog extends Animal {
  sound() {
    return `${this.name} barks! Woof!`;
  }
}

class Cat extends Animal {
  sound() {
    return `${this.name} meows! Meow!`;
  }
}

const dog = new Dog('Buddy', 3, 'brown', 4);
const cat = new Cat('Whiskers', 2, 'black', 4);

console.log(dog.describe());
console.log(dog.sound());
console.log(cat.describe());
console.log(cat.sound());