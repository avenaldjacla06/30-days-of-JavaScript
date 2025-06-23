// 1. Grade system
let score = prompt("Enter your score:");
score = Number(score);

if (score >= 80 && score <= 100) {
  console.log("A");
} else if (score >= 70) {
  console.log("B");
} else if (score >= 60) {
  console.log("C");
} else if (score >= 50) {
  console.log("D");
} else if (score >= 0) {
  console.log("F");
} else {
  console.log("Invalid score");
}

// 2. Season checker
let month = prompt("Enter the month:");
month = month.toLowerCase();

if (["september", "october", "november"].includes(month)) {
  console.log("The season is Autumn.");
} else if (["december", "january", "february"].includes(month)) {
  console.log("The season is Winter.");
} else if (["march", "april", "may"].includes(month)) {
  console.log("The season is Spring.");
} else if (["june", "july", "august"].includes(month)) {
  console.log("The season is Summer.");
} else {
  console.log("Invalid month");
}

// 3. Weekend or working day
let day = prompt("What is the day today?");
day = day.toLowerCase();

if (["saturday", "sunday"].includes(day)) {
  console.log(`${capitalize(day)} is a weekend.`);
} else {
  console.log(`${capitalize(day)} is a working day.`);
}


function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
