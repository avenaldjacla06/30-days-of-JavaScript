// Reusing previous arrays...

// 1. Total price using chaining:
// include only numeric prices
const totalPrice = products
  .map(p => (typeof p.price === 'number' ? p.price : 0))
  .filter(price => price > 0)
  .reduce((sum, p) => sum + p, 0);
console.log('Total price (chained):', totalPrice);

// 2. Total price using only reduce:
const totalReduce = products.reduce((sum, p) => {
  const price = typeof p.price === 'number' ? p.price : 0;
  return sum + price;
}, 0);
console.log('Total price (reduce):', totalReduce);

// 3. categorizeCountries by pattern:
function categorizeCountries(countries, pattern) {
  return countries.filter(country =>
    country.toLowerCase().includes(pattern.toLowerCase())
  );
}
console.log('Countries with land:', categorizeCountries(countries, 'land'));

// 4. Letter initial count:
function countInitials(countries) {
  return countries.reduce((acc, c) => {
    const letter = c[0].toUpperCase();
    acc[letter] = (acc[letter] || 0) + 1;
    return acc;
  }, {});
}
console.log('Initial counts:', countInitials(countries));

// 5. First ten countries:
function getFirstTenCountries(countries) {
  return countries.slice(0, 10);
}
console.log('First ten:', getFirstTenCountries(countries));

// 6. Last ten countries:
function getLastTenCountries(countries) {
  return countries.slice(-10);
}
console.log('Last ten:', getLastTenCountries(countries));

// 7. Most common initial letter:
(function findMostCommonInitial(countries) {
  const counts = countInitials(countries);
  let max = 0, letter = '';
  for (let [l, c] of Object.entries(counts)) {
    if (c > max) { max = c; letter = l; }
  }
  console.log(`Most common initial: "${letter}" appears ${max} times`);
})(countries);
