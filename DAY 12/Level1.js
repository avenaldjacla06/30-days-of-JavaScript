// 1. Calculate total annual income from a text
let incomeText = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';
// Extract all numbers from the text
let incomeMatches = incomeText.match(/\d+/g).map(Number);
// (4000 + 5500) * 12 + 10000
let annualIncome = (incomeMatches[0] + incomeMatches[2]) * 12 + incomeMatches[1];
console.log("Total Annual Income:", annualIncome); // Output: 151000

// 2. Calculate the distance between the furthest particles
let points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8'];
// Convert all strings to numbers
let numericPoints = points.map(Number);
// Sort them in ascending order
let sortedPoints = numericPoints.sort((a, b) => a - b);
// Subtract the smallest from the largest to get the distance
let distance = sortedPoints[sortedPoints.length - 1] - sortedPoints[0];
console.log("Sorted Points:", sortedPoints);
console.log("Distance between furthest points:", distance); // Output: 12

// 3. Check if a string is a valid JavaScript variable
function is_valid_variable(name) {
  // Valid variable names must start with a letter, _ or $, followed by letters, numbers, _ or $
  return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(name);
}

console.log(is_valid_variable('first_name'));  // true
console.log(is_valid_variable('first-name'));  // false
console.log(is_valid_variable('1first_name')); // false
console.log(is_valid_variable('firstname'));   // true

