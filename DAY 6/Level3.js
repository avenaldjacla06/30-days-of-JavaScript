// Copy countries array
let copiedCountries = [...countries];

// Sort copiedCountries
let sortedCountries = [...copiedCountries].sort();
console.log(sortedCountries);

// Sort webTechs and mernStack
console.log([...webTechs].sort());
console.log([...mernStack].sort());

// Extract countries with 'land'
console.log(countries.filter(c => c.includes('land')));

// Country with highest char count
const longestName = countries.reduce((a, b) => a.length > b.length ? a : b);
console.log(longestName);

// Countries with 4 characters
console.log(countries.filter(c => c.length === 4));

// Countries with two or more words
console.log(countries.filter(c => c.includes(' ')));

// Reverse countries array and capitalize
const reversedCaps = [...countries].reverse().map(c => c.toUpperCase());
console.log(reversedCaps);
