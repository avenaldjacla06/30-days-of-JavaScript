// ===== Level 3 =====

// 1. Average weight of cats in metric
fetch('https://api.thecatapi.com/v1/breeds')
  .then(response => response.json())
  .then(cats => {
    let totalWeight = 0;
    let count = 0;

    cats.forEach(cat => {
      const weight = cat.weight.metric; // format like "3 - 5"
      if (weight) {
        const [min, max] = weight.split(' - ').map(Number);
        const avg = (min + max) / 2;
        totalWeight += avg;
        count++;
      }
    });

    const averageWeight = (totalWeight / count).toFixed(2);
    console.log('--- Level 3: Average Cat Weight (metric) ---');
    console.log(`Average weight of cats: ${averageWeight} kg`);
  });

// 2. Find the 10 largest countries by area
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(countries => {
    const sortedByArea = countries
      .filter(c => c.area)
      .sort((a, b) => b.area - a.area)
      .slice(0, 10);

    console.log('--- Level 3: 10 Largest Countries by Area ---');
    sortedByArea.forEach(c => {
      console.log(`${c.name.common} - Area: ${c.area}`);
    });
  });

// 3. Count total number of official languages in the world
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(countries => {
    const languageSet = new Set();

    countries.forEach(country => {
      if (country.languages) {
        Object.values(country.languages).forEach(lang => languageSet.add(lang));
      }
    });

    console.log('--- Level 3: Total Number of Official Languages ---');
    console.log(`Total official languages: ${languageSet.size}`);
  });
