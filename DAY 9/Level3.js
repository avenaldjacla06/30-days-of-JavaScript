// Example: countries_data.js (should contain array of country objects)
import { countriesData } from './countries_data.js'

// Sort by name, capital, population
const byName = [...countriesData].sort((a, b) => a.name.localeCompare(b.name))
const byCapital = [...countriesData].sort((a, b) => a.capital?.localeCompare(b.capital || '') || 0)
const byPopulation = [...countriesData].sort((a, b) => b.population - a.population)

console.log('By Name:', byName.map(c => c.name))
console.log('By Capital:', byCapital.map(c => c.capital))
console.log('By Population:', byPopulation.map(c => c.name))

// Most spoken languages
function mostSpokenLanguages(data, count) {
  const langFreq = {}
  data.forEach(country => {
    country.languages.forEach(lang => {
      langFreq[lang] = (langFreq[lang] || 0) + 1
    })
  })
  return Object.entries(langFreq)
    .map(([lang, count]) => ({ country: lang, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, count)
}
console.log(mostSpokenLanguages(countriesData, 10))
console.log(mostSpokenLanguages(countriesData, 3))

// Most populated countries
function mostPopulatedCountries(data, count) {
  return data
    .sort((a, b) => b.population - a.population)
    .slice(0, count)
    .map(c => ({ country: c.name, population: c.population }))
}
console.log(mostPopulatedCountries(countriesData, 10))
console.log(mostPopulatedCountries(countriesData, 3))
