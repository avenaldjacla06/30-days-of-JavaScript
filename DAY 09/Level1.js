// Level 1 Exercises

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// 1. Difference between forEach, map, filter, reduce
// forEach -> Executes a function on each item (no return value)
numbers.forEach(num => console.log(num))
// map -> Transforms items and returns a new array
const double = numbers.map(num => num * 2)
// filter -> Filters items based on condition
const even = numbers.filter(num => num % 2 === 0)
// reduce -> Reduces to a single value
const sum = numbers.reduce((acc, val) => acc + val, 0)

// 2. Define a callback function
function logItem(item) {
  console.log(item)
}
countries.forEach(logItem)

// 3. Use forEach to console.log
countries.forEach(country => console.log(country))
names.forEach(name => console.log(name))
numbers.forEach(num => console.log(num))

// 4. Use map
const countriesUpper = countries.map(country => country.toUpperCase())
const countriesLength = countries.map(country => country.length)
const numbersSquared = numbers.map(num => num * num)
const namesUpper = names.map(name => name.toUpperCase())
const productPrices = products.map(product => product.price)

console.log(countriesUpper)
console.log(countriesLength)
console.log(numbersSquared)
console.log(namesUpper)
console.log(productPrices)

// 5. Use filter
const landCountries = countries.filter(country => country.toLowerCase().includes('land'))
const sixCharCountries = countries.filter(country => country.length === 6)
const sixOrMoreChar = countries.filter(country => country.length >= 6)
const startWithE = countries.filter(country => country.startsWith('E'))
const validPrices = products.filter(product =>
  typeof product.price === 'number' && product.price > 0
)

console.log(landCountries)
console.log(sixCharCountries)
console.log(sixOrMoreChar)
console.log(startWithE)
console.log(validPrices)

// 6. getStringLists function
function getStringLists(arr) {
  return arr.filter(item => typeof item === 'string')
}
console.log(getStringLists([1, 'two', 3, 'four', true]))

// 7. Use reduce
const total = numbers.reduce((acc, num) => acc + num, 0)
console.log('Total:', total)

const sentence = countries.reduce((acc, curr, index) => {
  if (index === countries.length - 1) {
    return acc + 'and ' + curr + ' are north European countries.'
  }
  return acc + curr + ', '
}, '')
console.log(sentence)

// 8. some vs every
const someLongName = names.some(name => name.length > 7)
console.log('Some names longer than 7:', someLongName)

const allHaveLand = countries.every(country => country.includes('land'))
console.log('All countries include land:', allHaveLand)

// 9. find vs findIndex
const firstSixLetterCountry = countries.find(country => country.length === 6)
console.log('First 6-letter country:', firstSixLetterCountry)

const firstSixLetterIndex = countries.findIndex(country => country.length === 6)
console.log('Index of first 6-letter country:', firstSixLetterIndex)

const norwayIndex = countries.findIndex(country => country === 'Norway')
console.log('Index of Norway:', norwayIndex)

const russiaIndex = countries.findIndex(country => country === 'Russia')
console.log('Index of Russia:', russiaIndex)
