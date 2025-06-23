// Function to get the ten most frequent words in a text
function tenMostFrequentWords(text, count = 10) {
  // Extract all words
  let words = text.match(/\b\w+\b/g);
  let frequency = {};

  // Count the frequency of each word (case insensitive)
  words.forEach(word => {
    let lower = word.toLowerCase();
    frequency[lower] = (frequency[lower] || 0) + 1;
  });

  // Convert to array, sort by count, and slice the top "count"
  let sorted = Object.entries(frequency)
    .sort((a, b) => b[1] - a[1])
    .map(([word, count]) => ({ word, count }));

  return sorted.slice(0, count);
}

const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

console.log(tenMostFrequentWords(paragraph));          // default top 10
console.log(tenMostFrequentWords(paragraph, 10));      // explicitly get top 10

