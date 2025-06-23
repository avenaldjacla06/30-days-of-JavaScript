function fullName() {
  console.log("Avenald Jacla");
}

function fullNameParams(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function addNumbers(a, b) {
  return a + b;
}

function areaOfRectangle(length, width) {
  return length * width;
}

function perimeterOfRectangle(length, width) {
  return 2 * (length + width);
}

function volumeOfRectPrism(length, width, height) {
  return length * width * height;
}

function areaOfCircle(r) {
  return Math.PI * r * r;
}

function circumOfCircle(r) {
  return 2 * Math.PI * r;
}

function density(mass, volume) {
  return mass / volume;
}

function speed(distance, time) {
  return distance / time;
}

function weight(mass, gravity = 9.81) {
  return mass * gravity;
}

function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function bmi(weight, height) {
  const result = weight / (height * height);
  if (result < 18.5) return "Underweight";
  else if (result < 25) return "Normal weight";
  else if (result < 30) return "Overweight";
  else return "Obese";
}

function checkSeason(month) {
  const m = month.toLowerCase();
  if (["september", "october", "november"].includes(m)) return "Autumn";
  if (["december", "january", "february"].includes(m)) return "Winter";
  if (["march", "april", "may"].includes(m)) return "Spring";
  if (["june", "july", "august"].includes(m)) return "Summer";
  return "Invalid month";
}

function findMax(a, b, c) {
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  return max;
}