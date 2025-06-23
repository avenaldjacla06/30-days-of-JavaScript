// 1. Function to clean the messy text
function cleanText(text) {
  // Remove all non-alphanumeric characters except spaces
  return text.replace(/[^a-zA-Z0-9\s]/g, '');
}

let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

let cleanedText = cleanText(sentence);
console.log("Cleaned Text:", cleanedText);


// 2. Function to find the most frequent words in a cleaned text
function mostFrequentWords(text, count = 3) {
  let words = text.match(/\b\w+\b/g);
  let freq = {};

  // Count each word's occurrence
  words.forEach(word => {
    freq[word] = (freq[word] || 0) + 1;
  });

  // Sort and get the top "count" frequent words
  return Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, count)
    .map(([word, count]) => ({ word, count }));
}

console.log(mostFrequentWords(cleanedText)); // Top 3 most frequent words