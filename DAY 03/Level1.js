// Variable declarations
let firstName = "Avenald";
let lastName = "Jacla";
let country = "Philippines";
let province = "Agoo";
let age = 23;
let isMarried = false;
let year = 2025;

console.log(typeof firstName); // string
console.log(typeof lastName); // string
console.log(typeof country); // string
console.log(typeof city); // string
console.log(typeof age); // number
console.log(typeof isMarried); // boolean
console.log(typeof year); // number

// Type checks
console.log(typeof '10' === typeof 10); // false
console.log(parseInt('9.8') === 10); // false

// Truthy values
console.log(Boolean(100));
console.log(Boolean("hello"));
console.log(Boolean([1, 2]));

// Falsy values
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));

// Comparison expressions
console.log(4 > 3);       // true
console.log(4 >= 3);      // true
console.log(4 < 3);       // false
console.log(4 <= 3);      // false
console.log(4 == 4);      // true
console.log(4 === 4);     // true
console.log(4 != 4);      // false
console.log(4 !== 4);     // false
console.log(4 != '4');    // false
console.log(4 == '4');    // true
console.log(4 === '4');   // false

// Falsy comparison using length
let python = "python";
let jargon = "jargon";
console.log(python.length !== jargon.length); // false

// Logical operators
console.log(4 > 3 && 10 < 12);  // true
console.log(4 > 3 && 10 > 12);  // false
console.log(4 > 3 || 10 < 12);  // true
console.log(4 > 3 || 10 > 12);  // true
console.log(!(4 > 3));          // false
console.log(!(4 < 3));          // true
console.log(!false);            // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === '4'));        // true

// Check for 'on'
console.log(!("dragon".includes("on") && "python".includes("on"))); // false

// Date object
const now = new Date();
console.log("Year:", now.getFullYear());
console.log("Month:", now.getMonth() + 1);
console.log("Date:", now.getDate());
console.log("Day of week:", now.getDay());
console.log("Hour:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds since Jan 1, 1970:", Math.floor(now.getTime() / 1000));
