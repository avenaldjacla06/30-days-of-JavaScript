// Area of a triangle
let base = prompt("Enter base:");
let height = prompt("Enter height:");
let triangleArea = 0.5 * base * height;
console.log(`The area of the triangle is ${triangleArea}`);

// Perimeter of a triangle
let a = prompt("Enter side a:");
let b = prompt("Enter side b:");
let c = prompt("Enter side c:");
let perimeter = Number(a) + Number(b) + Number(c);
console.log(`The perimeter of the triangle is ${perimeter}`);

// Area and perimeter of a rectangle
let length = prompt("Enter length:");
let width = prompt("Enter width:");
console.log(`Area: ${length * width}`);
console.log(`Perimeter: ${2 * (Number(length) + Number(width))}`);

// Area and circumference of a circle
let radius = prompt("Enter radius:");
const pi = 3.14;
console.log(`Area: ${pi * radius * radius}`);
console.log(`Circumference: ${2 * pi * radius}`);

// Slope, intercepts
let slope = 2;
let yIntercept = -2;
let xIntercept = -yIntercept / slope;
console.log(`Slope: ${slope}, y-intercept: ${yIntercept}, x-intercept: ${xIntercept}`);

// Slope between (2,2) and (6,10)
let m = (10 - 2) / (6 - 2); // (y2 - y1) / (x2 - x1)
console.log(`Slope between points: ${m}`);

// Compare slopes
console.log(slope === m ? "Slopes are equal" : "Slopes are different");

// Value of y = x² + 6x + 9
let x = -3;
let y = x * x + 6 * x + 9;
console.log(`At x = ${x}, y = ${y}`);

// Weekly pay
let hours = prompt("Enter hours:");
let rate = prompt("Enter rate per hour:");
console.log(`Your weekly earning is ${hours * rate}`);

// Name length check
let yourName = prompt("Enter your name:");
if (yourName.length > 7) {
  console.log("Your name is long");
} else {
  console.log("Your name is short");
}

// Compare name lengths
let fn = "Avenald";
let ln = "Jacla";
if (fn.length > ln.length) {
  console.log(`Your first name, ${fn} is longer than your family name, ${ln}`);
} else {
  console.log(`Your family name, ${ln} is longer than your first name, ${fn}`);
}

// Age comparison
let myAge = 250;
let yourAge = 25;
console.log(`I am ${myAge - yourAge} years older than you.`);

// Driving age
let birthYear = prompt("Enter birth year:");
let currentYear = new Date().getFullYear();
let userAge = currentYear - birthYear;
if (userAge >= 18) {
  console.log(`You are ${userAge}. You are old enough to drive.`);
} else {
  console.log(`You are ${userAge}. You will be allowed to drive after ${18 - userAge} years.`);
}

// Seconds lived
let yearsLived = prompt("Enter number of years you live:");
let secondsLived = yearsLived * 365 * 24 * 60 * 60;
console.log(`You lived ${secondsLived} seconds.`);

// Time formats
let date = new Date();
let year_ = date.getFullYear();
let month = String(date.getMonth() + 1).padStart(2, '0');
let day = String(date.getDate()).padStart(2, '0');
let hour = String(date.getHours()).padStart(2, '0');
let minute = String(date.getMinutes()).padStart(2, '0');

console.log(`${year_}-${month}-${day} ${hour}:${minute}`);
console.log(`${day}-${month}-${year_} ${hour}:${minute}`);
console.log(`${day}/${month}/${year_} ${hour}:${minute}`);
