const countries = ['Philippines', 'Japan', 'USA', 'Brazil', 'Canada'];

// 1. Display the countries array as a table
console.table(countries);

// 2. Display the countries object as a table
const countriesObj = {
  Philippines: 'Manila',
  Japan: 'Tokyo',
  USA: 'Washington D.C.',
  Brazil: 'Brasília',
  Canada: 'Ottawa'
};

console.table(countriesObj);

// 3. Use console.group() to group logs
console.group('Country Info');
console.log('Countries count:', countries.length);
console.log('First country:', countries[0]);
console.log('Country object keys:', Object.keys(countriesObj));
console.groupEnd();
