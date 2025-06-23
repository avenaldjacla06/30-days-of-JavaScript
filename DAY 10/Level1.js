// Level 1 Setup
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// Define a callback function
const printItem = (item) => console.log(item);

// forEach usage
console.log('Countries:');
countries.forEach(printItem);

console.log('\nNames:');
names.forEach(printItem);

console.log('\nNumbers:');
numbers.forEach(printItem);

// map usage
const countriesUpper = countries.map(country => country.toUpperCase());
console.log('\nCountries in uppercase:', countriesUpper);

const countriesLength = countries.map(country => country.length);
console.log('Countries name lengths:', countriesLength);

const numbersSquared = numbers.map(num => num * num);
console.log('Numbers squared:', numbersSquared);

const namesUpper = names.map(name => name.toUpperCase());
console.log('Names in uppercase:', namesUpper);

const productPrices = products.map(p => p.price);
console.log('Product prices:', productPrices);

// filter usage
const landCountries = countries.filter(country => country.toLowerCase().includes('land'));
console.log('\nCountries containing "land":', landCountries);

const sixCharCountries = countries.filter(country => country.length === 6);
console.log('Countries with 6 characters:', sixCharCountries);

const sixOrMoreCharCountries = countries.filter(country => country.length >= 6);
console.log('Countries with 6 or more characters:', sixOrMoreCharCountries);

const countriesStartWithE = countries.filter(country => country.startsWith('E'));
console.log('Countries starting with "E":', countriesStartWithE);

const validPrices = products.filter(p => typeof p.price === 'number' && p.price > 0);
console.log('Products with valid prices:', validPrices);

// getStringLists function
function getStringLists(arr) {
  return arr.filter(item => typeof item === 'string');
}
console.log('\nOnly strings from a sample array:', getStringLists([1, 'apple', true, 'banana', null]));

// reduce usage
const sumNumbers = numbers.reduce((acc, cur) => acc + cur, 0);
console.log('\nSum of numbers:', sumNumbers);

const countriesSentence = countries.reduce((acc, cur, idx) => {
  return idx === countries.length - 1
    ? acc + 'and ' + cur
    : acc + cur + ', ';
}, '') + ' are north European countries.';
console.log('Countries sentence:', countriesSentence);

// some and every
const someLongNames = names.some(name => name.length > 7);
console.log('\nSome names longer than 7 characters:', someLongNames);

const allContainLand = countries.every(country => country.toLowerCase().includes('land'));
console.log('All countries contain "land":', allContainLand);

// find and findIndex
const sixLetterCountry = countries.find(country => country.length === 6);
console.log('\nFirst country with 6 letters:', sixLetterCountry);

const sixLetterIndex = countries.findIndex(country => country.length === 6);
console.log('Index of first 6-letter country:', sixLetterIndex);

const norwayIndex = countries.findIndex(country => country === 'Norway');
console.log('Index of Norway:', norwayIndex);

const russiaIndex = countries.findIndex(country => country === 'Russia');
console.log('Index of Russia (not in array):', russiaIndex);
