// LEVEL 2

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."');
console.log(typeof '10' === 10);  // false
console.log(parseInt('10') === 10);  // true
console.log(parseFloat('9.8') === 10);  // false
console.log(Math.round(parseFloat('9.8')) === 10);  // true

console.log('python'.includes('on') && 'jargon'.includes('on'));
console.log('I hope this course is not full of jargon'.includes('jargon'));

console.log(Math.floor(Math.random() * 101)); // 0 to 100
console.log(Math.floor(Math.random() * 51) + 50); // 50 to 100
console.log(Math.floor(Math.random() * 256)); // 0 to 255

let js = 'JavaScript';
console.log(js.charAt(Math.floor(Math.random() * js.length)));

console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

console.log(sentence.substr(sentence.indexOf('because'), 'because because because'.length));
