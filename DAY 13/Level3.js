const testArray = Array(1000000).fill(0);

// 1. While loop
console.time('While Loop');
let i = 0;
while (i < testArray.length) {
  testArray[i];
  i++;
}
console.timeEnd('While Loop');

// 2. For loop
console.time('For Loop');
for (let i = 0; i < testArray.length; i++) {
  testArray[i];
}
console.timeEnd('For Loop');

// 3. For...of loop
console.time('For...of Loop');
for (const item of testArray) {
  item;
}
console.timeEnd('For...of Loop');

// 4. forEach loop
console.time('forEach Loop');
testArray.forEach(item => {
  item;
});
console.timeEnd('forEach Loop');
