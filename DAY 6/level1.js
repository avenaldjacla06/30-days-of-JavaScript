// Iterate 0 to 10 using for, while, do while
for (let i = 0; i <= 10; i++) console.log(i);

let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

i = 0;
do {
  console.log(i);
  i++;
} while (i <= 10);

// Iterate 10 to 0 using for, while, do while
for (let i = 10; i >= 0; i--) console.log(i);

i = 10;
while (i >= 0) {
  console.log(i);
  i--;
}

i = 10;
do {
  console.log(i);
  i--;
} while (i >= 0);

// Iterate 0 to n using for loop
let n = 5;
for (let i = 0; i <= n; i++) {
  console.log(i);
}

// Print pattern #
let pattern = '';
for (let i = 1; i <= 7; i++) {
  pattern += '#';
  console.log(pattern);
}

// Multiplication pattern
for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}

// Power table
console.log('i  i^2  i^3');
for (let i = 0; i <= 10; i++) {
  console.log(`${i}  ${i**2}   ${i**3}`);
}

// Even numbers 0–100
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) console.log(i);
}

// Odd numbers 0–100
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) console.log(i);
}

// Prime numbers 0–100
for (let i = 2; i <= 100; i++) {
  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) console.log(i);
}

// Sum of all numbers 0–100
let sum = 0;
for (let i = 0; i <= 100; i++) sum += i;
console.log("Sum:", sum);

// Sum of evens and odds
let evenSum = 0, oddSum = 0;
for (let i = 0; i <= 100; i++) {
  i % 2 === 0 ? evenSum += i : oddSum += i;
}
console.log(`Even: ${evenSum}, Odd: ${oddSum}`);
console.log([evenSum, oddSum]);

// Array of 5 random numbers
let randomNums = Array.from({length: 5}, () => Math.floor(Math.random() * 100));
console.log(randomNums);

// Array of 5 unique random numbers
let uniqueRandoms = [];
while (uniqueRandoms.length < 5) {
  let rand = Math.floor(Math.random() * 100);
  if (!uniqueRandoms.includes(rand)) uniqueRandoms.push(rand);
}
console.log(uniqueRandoms);

// Six character random id
let chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
let randomId = '';
for (let i = 0; i < 6; i++) {
  randomId += chars[Math.floor(Math.random() * chars.length)];
}
console.log(randomId);
