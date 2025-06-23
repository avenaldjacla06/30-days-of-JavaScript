// ===== Level 2 =====
// Fetch cat names from Cats API
let catNames = [];

fetch('https://api.thecatapi.com/v1/breeds')
  .then(response => response.json())
  .then(cats => {
    catNames = cats.map(cat => cat.name);
    console.log('--- Level 2: Cat Names ---');
    console.log(catNames);
  });

