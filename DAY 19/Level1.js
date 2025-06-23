function outerFunction() {
  let count = 0;
  function innerFunction() {
    count++;
    return count;
  }
  return innerFunction;
}

const counter = outerFunction();
console.log('Level 1:');
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
