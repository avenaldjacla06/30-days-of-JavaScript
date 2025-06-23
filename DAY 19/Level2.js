 function calculator(base) {
  function add(x) {
    return base + x;
  }

  function subtract(x) {
    return base - x;
  }

  function multiply(x) {
    return base * x;
  }

  return {
    add,
    subtract,
    multiply
  };
}

const calc = calculator(10);
console.log('Level 2:');
console.log('Add:', calc.add(5));        // 15
console.log('Subtract:', calc.subtract(3)); // 7
console.log('Multiply:', calc.multiply(4)); // 40
