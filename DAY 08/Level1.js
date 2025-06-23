// Create an empty object called dog
let dog = {};
console.log(dog);

// Add properties
dog.name = 'Buddy';
dog.legs = 4;
dog.color = 'brown';
dog.age = 3;
dog.bark = function () {
  return 'woof woof';
};

// Get values
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());

// Add new properties
dog.breed = 'Labrador';
dog.getDogInfo = function () {
  return `${this.name} is a ${this.color} ${this.breed} with ${this.legs} legs.`;
};
console.log(dog.getDogInfo());
