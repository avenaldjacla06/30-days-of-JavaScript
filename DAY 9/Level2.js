const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// Total price with filter + map + reduce
const totalPrice = products
  .filter(p => typeof p.price === 'number' && p.price > 0)
  .map(p => p.price)
  .reduce((acc, price) => acc + price, 0)
console.log('Total Price:', totalPrice)

// Using only reduce
const totalUsingReduce = products.reduce((acc, p) => {
  return acc + (typeof p.price === 'number' ? p.price : 0)
}, 0)
console.log('Total (reduce only):', totalUsingReduce)

// categorizeCountries function
function categorizeCountries(pattern) {
  return countries.filter(country => country.toLowerCase().includes(pattern))
}
console.log(categorizeCountries('land'))
console.log(categorizeCountries('ia'))
console.log(categorizeCountries('island'))
console.log(categorizeCountries('stan'))

// Function: count initial letters
function startingLetterCount(arr) {
  const countMap = {}
  arr.forEach(country => {
    const firstLetter = country[0].toUpperCase()
    countMap[firstLetter] = (countMap[firstLetter] || 0) + 1
  })
  return Object.entries(countMap).map(([letter, count]) => ({ letter, count }))
}
console.log(startingLetterCount(countries))

// Get first 10 countries
function getFirstTenCountries(arr) {
  return arr.slice(0, 10)
}
console.log(getFirstTenCountries(countries))

// Get last 10 countries
function getLastTenCountries(arr) {
  return arr.slice(-10)
}
console.log(getLastTenCountries(countries))

// Most used initial letter
function mostUsedInitial(arr) {
  const frequency = {}
  arr.forEach(country => {
    const letter = country[0].toUpperCase()
    frequency[letter] = (frequency[letter] || 0) + 1
  })
  return Object.entries(frequency).sort((a, b) => b[1] - a[1])[0]
}
console.log('Most used initial:', mostUsedInitial(countries))
