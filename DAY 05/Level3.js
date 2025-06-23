const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort
ages.sort((a, b) => a - b);
const minAge = ages[0];
const maxAge = ages[ages.length - 1];
console.log(minAge, maxAge);

// Median
let median;
const mid = Math.floor(ages.length / 2);
if (ages.length % 2 === 0) {
  median = (ages[mid - 1] + ages[mid]) / 2;
} else {
  median = ages[mid];
}
console.log('Median:', median);

// Average
const average = ages.reduce((a, b) => a + b, 0) / ages.length;
console.log('Average:', average);

// Range
console.log('Range:', maxAge - minAge);

// Compare abs(min - avg) and abs(max - avg)
console.log('Min - Avg:', Math.abs(minAge - average));
console.log('Max - Avg:', Math.abs(maxAge - average));

// First 10 countries
console.log(countries.slice(0, 10));

// Middle country(ies)
const middleIndex = Math.floor(countries.length / 2);
if (countries.length % 2 === 0) {
  console.log(countries.slice(middleIndex - 1, middleIndex + 1));
} else {
  console.log(countries[middleIndex]);
}

// Divide countries array
let firstHalf, secondHalf;
if (countries.length % 2 === 0) {
  firstHalf = countries.slice(0, countries.length / 2);
  secondHalf = countries.slice(countries.length / 2);
} else {
  firstHalf = countries.slice(0, Math.ceil(countries.length / 2));
  secondHalf = countries.slice(Math.ceil(countries.length / 2));
}
console.log('First Half:', firstHalf);
console.log('Second Half:', secondHalf);
