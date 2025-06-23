
// LEVEL 3

let loveSentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log((loveSentence.match(/love/gi) || []).length);

console.log((sentence.match(/because/g) || []).length);

const messyText = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let cleanText = messyText.replace(/[%@&#$;!?.]/g, '').replace(/\s+/g, ' ');
let words = cleanText.toLowerCase().match(/\w+/g);
let freq = {};
words.forEach(word => freq[word] = (freq[word] || 0) + 1);
let mostFrequent = Object.entries(freq).reduce((a, b) => a[1] > b[1] ? a : b);
console.log(mostFrequent);

let incomeText = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let numbers = incomeText.match(/\d+/g).map(Number);
let totalAnnualIncome = (numbers[0] + numbers[2]) * 12 + numbers[1];
console.log('Total annual income:', totalAnnualIncome);
