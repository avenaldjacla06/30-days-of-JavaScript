// Random ID with any number of characters
function generateId(length) {
  let chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';
  for (let i = 0; i < length; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
}
console.log(generateId(12));

// Random hex color
const hexColor = '#' + Math.floor(Math.random()*16777215).toString(16);
console.log(hexColor);

// Random RGB color
const rgb = () => `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
console.log(rgb());

// Capitalize countries
const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];
const upperCountries = countries.map(country => country.toUpperCase());
console.log(upperCountries);

// Country lengths
const countryLengths = countries.map(country => country.length);
console.log(countryLengths);

// Array of arrays
const countriesDetails = countries.map(c => [c, c.slice(0, 3).toUpperCase(), c.length]);
console.log(countriesDetails);

// Countries containing "land"
const landCountries = countries.filter(c => c.includes('land'));
console.log(landCountries.length > 0 ? landCountries : 'All these countries are without land');

// Countries ending with "ia"
const iaCountries = countries.filter(c => c.endsWith('ia'));
console.log(iaCountries.length > 0 ? iaCountries : 'These are countries ends without ia');

// Country with longest name
const longestCountry = countries.reduce((a, b) => a.length > b.length ? a : b);
console.log(longestCountry);

// Countries with 5 characters
const fiveCharCountries = countries.filter(c => c.length === 5);
console.log(fiveCharCountries);

// Longest webTech
const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];
const longestTech = webTechs.reduce((a, b) => a.length > b.length ? a : b);
console.log(longestTech);

// WebTechs as array of arrays
const techDetails = webTechs.map(t => [t, t.length]);
console.log(techDetails);

// MERN acronym
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
const mern = mernStack.map(tech => tech[0]).join('');
console.log(mern);

// Loop through technologies
const techList = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
for (const tech of techList) console.log(tech);

// Reverse fruit array using loop
const fruits = ['banana', 'orange', 'mango', 'lemon'];
let reversedFruits = [];
for (let i = fruits.length - 1; i >= 0; i--) {
  reversedFruits.push(fruits[i]);
}
console.log(reversedFruits);

// Print nested fullStack
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];
for (const stack of fullStack) {
  for (const tech of stack) {
    console.log(tech.toUpperCase());
  }
}
