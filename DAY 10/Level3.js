// Assuming you have `countries_data.js` loaded with the full countries array
import countries from './countries_data.js';

// 1. Sort Countries
const sortedByName = [...countries].sort((a, b) => a.name.localeCompare(b.name));
const sortedByCapital = [...countries].sort((a, b) => a.capital?.localeCompare(b.capital));
const sortedByPopulation = [...countries].sort((a, b) => b.population - a.population);

// 2. Most Spoken Languages
function mostSpokenLanguages(countries, topN) {
  const languageCount = {};
  countries.forEach(country => {
    country.languages.forEach(lang => {
      languageCount[lang] = (languageCount[lang] || 0) + 1;
    });
  });
  return Object.entries(languageCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, topN)
    .map(([language, count]) => ({ country: language, count }));
}

// 3. Most Populated Countries
function mostPopulatedCountries(countries, topN) {
  return [...countries]
    .sort((a, b) => b.population - a.population)
    .slice(0, topN)
    .map(c => ({ country: c.name, population: c.population }));
}

// 4. Statistics
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

const statistics = {
  count: () => ages.length,
  sum: () => ages.reduce((a, b) => a + b, 0),
  min: () => Math.min(...ages),
  max: () => Math.max(...ages),
  range: () => statistics.max() - statistics.min(),
  mean: () => +(statistics.sum() / statistics.count()).toFixed(1),
  median: () => {
    const sorted = [...ages].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0
      ? (sorted[mid - 1] + sorted[mid]) / 2
      : sorted[mid];
  },
  mode: () => {
    const freq = {};
    ages.forEach(age => (freq[age] = (freq[age] || 0) + 1));
    const maxFreq = Math.max(...Object.values(freq));
    const mode = Object.keys(freq).find(key => freq[key] === maxFreq);
    return { mode: Number(mode), count: maxFreq };
  },
  var: () => {
    const mean = statistics.mean();
    return +(ages.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / ages.length).toFixed(1);
  },
  std: () => +(Math.sqrt(statistics.var()).toFixed(1)),
  freqDist: () => {
    const freq = {};
    ages.forEach(age => freq[age] = (freq[age] || 0) + 1);
    return Object.entries(freq)
      .map(([val, count]) => [(count / ages.length * 100).toFixed(1), Number(val)])
      .sort((a, b) => b[0] - a[0]);
  },
  describe: () => {
    return {
      Count: statistics.count(),
      Sum: statistics.sum(),
      Min: statistics.min(),
      Max: statistics.max(),
      Range: statistics.range(),
      Mean: statistics.mean(),
      Median: statistics.median(),
      Mode: statistics.mode(),
      Variance: statistics.var(),
      'Standard Deviation': statistics.std(),
      'Frequency Distribution': statistics.freqDist()
    };
  }
};

console.log("Sorted By Name:", sortedByName.map(c => c.name));
console.log("Sorted By Capital:", sortedByCapital.map(c => c.capital));
console.log("Sorted By Population:", sortedByPopulation.slice(0, 5).map(c => c.name));
console.log("Most Spoken Languages:", mostSpokenLanguages(countries, 10));
console.log("Most Populated Countries:", mostPopulatedCountries(countries, 10));
console.log("Statistics Description:", statistics.describe());
