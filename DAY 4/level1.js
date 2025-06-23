// 1. Check age for driving
let age = prompt("Enter your age:");
age = Number(age);

if (age >= 18) {
  console.log("You are old enough to drive.");
} else {
  let yearsLeft = 18 - age;
  console.log(`You are left with ${yearsLeft} years to drive.`);
}



// 2. Compare ages
let myAge = 25;
let yourAge = prompt("Enter your age:");
yourAge = Number(yourAge);

if (yourAge > myAge) {
  console.log(`You are ${yourAge - myAge} years older than me.`);
} else if (yourAge < myAge) {
  console.log(`I am ${myAge - yourAge} years older than you.`);
} else {
  console.log("We are the same age.");
}



// 3. Compare a and b using if...else and ternary
let a = 4;
let b = 3;

// using if else
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than b");
}

// using ternary operator
a > b ? console.log("a is greater than b") : console.log("a is less than b");

// 4. Check even or odd
let num = prompt("Enter a number:");
num = Number(num);

if (num % 2 === 0) {
  console.log(`${num} is an even number`);
} else {
  console.log(`${num} is an odd number`);
}
