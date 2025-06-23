function userIdGeneratedByUser() {
  const numChars = parseInt(prompt("Enter number of characters:"));
  const numIds = parseInt(prompt("Enter number of IDs:"));
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < numIds; i++) {
    let id = "";
    for (let j = 0; j < numChars; j++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    console.log(id);
  }
}

function rgbColorGenerator() {
  return `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
}

function arrayOfHexaColors(n) {
  return Array(n).fill(0).map(() => randomHexaNumberGenerator());
}

function arrayOfRgbColors(n) {
  return Array(n).fill(0).map(() => rgbColorGenerator());
}

function convertHexaToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgb(${r},${g},${b})`;
}

function convertRgbToHexa(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function generateColors(type, n) {
  if (type === "hexa") return n === 1 ? randomHexaNumberGenerator() : arrayOfHexaColors(n);
  if (type === "rgb") return n === 1 ? rgbColorGenerator() : arrayOfRgbColors(n);
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

function isEmpty(param) {
  return param == null || param === "";
}

function sumOfArrayItems(arr) {
  if (!arr.every(item => typeof item === "number")) return "All items must be numbers.";
  return arr.reduce((acc, val) => acc + val, 0);
}

function average(arr) {
  if (!arr.every(item => typeof item === "number")) return "All items must be numbers.";
  return sumOfArrayItems(arr) / arr.length;
}

function modifyArray(arr) {
  if (arr.length < 5) return "Not Found";
  arr[4] = arr[4].toUpperCase();
  return arr;
}

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function areUnique(arr) {
  return new Set(arr).size === arr.length;
}

function sameDataType(arr) {
  const type = typeof arr[0];
  return arr.every(item => typeof item === type);
}

function isValidVariable(name) {
  return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(name);
}

function sevenRandomNumbers() {
  const numbers = new Set();
  while (numbers.size < 7) {
    numbers.add(Math.floor(Math.random() * 10));
  }
  return Array.from(numbers);
}

function reverseCountries(countries) {
  return [...countries].reverse();
}