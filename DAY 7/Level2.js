function solveLinEquation(a, b, c) {
  if (a === 0 && b === 0) return 'No solution';
  return `x = ${-c / a}, y = ${-c / b}`;
}

function solveQuadratic(a = 1, b = 0, c = 0) {
  const discriminant = b * b - 4 * a * c;
  if (discriminant > 0) {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [root1, root2];
  } else if (discriminant === 0) {
    return [-b / (2 * a)];
  } else {
    return [];
  }
}

function printArray(arr) {
  arr.forEach(item => console.log(item));
}

function showDateTime() {
  const now = new Date();
  const date = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
  const time = `${now.getHours()}:${now.getMinutes()}`;
  console.log(`${date} ${time}`);
}

function swapValues(x, y) {
  return [y, x];
}

function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

function capitalizeArray(arr) {
  return arr.map(item => item.toUpperCase());
}

let items = [];
function addItem(item) {
  items.push(item);
  return items;
}

function removeItem(index) {
  items.splice(index, 1);
  return items;
}

function sumOfNumbers(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) sum += i;
  return sum;
}

function sumOfOdds(n) {
  let sum = 0;
  for (let i = 1; i <= n; i += 2) sum += i;
  return sum;
}

function sumOfEven(n) {
  let sum = 0;
  for (let i = 0; i <= n; i += 2) sum += i;
  return sum;
}

function evensAndOdds(n) {
  let evens = 0, odds = 0;
  for (let i = 0; i <= n; i++) {
    i % 2 === 0 ? evens++ : odds++;
  }
  console.log(`The number of odds are ${odds}`);
  console.log(`The number of evens are ${evens}`);
}

function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}

function randomUserIp() {
  return `${random255()}.${random255()}.${random255()}.${random255()}`;
  function random255() {
    return Math.floor(Math.random() * 256);
  }
}

function randomMacAddress() {
  let hexDigits = "0123456789ABCDEF";
  let mac = "";
  for (let i = 0; i < 6; i++) {
    mac += hexDigits.charAt(Math.floor(Math.random() * 16));
    mac += hexDigits.charAt(Math.floor(Math.random() * 16));
    if (i !== 5) mac += ":";
  }
  return mac;
}

function randomHexaNumberGenerator() {
  const hex = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

function userIdGenerator() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < 7; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
}