// ===== Level 1 =====
// Fetch countries and print name, capital, languages, population, area
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(countries => {
    console.log('--- Level 1: Countries Info ---');
    countries.forEach(country => {
      const name = country.name.common;
      const capital = country.capital ? country.capital[0] : 'N/A';
      const languages = country.languages ? Object.values(country.languages).join(', ') : 'N/A';
      const population = country.population;
      const area = country.area;

      console.log(`Name: ${name}, Capital: ${capital}, Languages: ${languages}, Population: ${population}, Area: ${area}`);
    });
  });

