const countries = [
  'Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia',
  'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'
];

const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];

// Declare an empty array
const emptyArr = [];

// Declare an array with more than 5 elements
const numbers = [1, 2, 3, 4, 5, 6, 7];

// Find length
console.log(numbers.length);

// Get first, middle, last item
console.log(numbers[0]);                     // First
console.log(numbers[Math.floor(numbers.length / 2)]);  // Middle
console.log(numbers[numbers.length - 1]);    // Last

// mixedDataTypes array
const mixedDataTypes = [1, 'Hello', true, null, undefined, { name: 'John' }];
console.log(mixedDataTypes.length);

// itCompanies
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies);
console.log(itCompanies.length);

// First, middle, last company
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
console.log(itCompanies[itCompanies.length - 1]);

// Print each company
itCompanies.forEach(company => console.log(company));

// Uppercase
itCompanies.forEach(company => console.log(company.toUpperCase()));

// Sentence
console.log(`${itCompanies.join(', ')} are big IT companies.`);

// Check if company exists
const companyToCheck = 'Facebook';
if (itCompanies.includes(companyToCheck)) {
  console.log(companyToCheck);
} else {
  console.log('Company is not found');
}

// Companies with more than one 'o'
const multipleO = [];
for (let company of itCompanies) {
  let count = 0;
  for (let char of company.toLowerCase()) {
    if (char === 'o') count++;
  }
  if (count > 1) multipleO.push(company);
}
console.log(multipleO);

// Sort, reverse
console.log([...itCompanies].sort());
console.log([...itCompanies].reverse());

// Slice first 3
console.log(itCompanies.slice(0, 3));

// Slice last 3
console.log(itCompanies.slice(-3));

// Middle company
console.log(itCompanies.slice(Math.floor(itCompanies.length / 2), Math.floor(itCompanies.length / 2) + 1));

// Remove first
itCompanies.shift();
console.log(itCompanies);

// Remove middle
itCompanies.splice(Math.floor(itCompanies.length / 2), 1);
console.log(itCompanies);

// Remove last
itCompanies.pop();
console.log(itCompanies);

// Remove all
itCompanies.length = 0;
console.log(itCompanies);
