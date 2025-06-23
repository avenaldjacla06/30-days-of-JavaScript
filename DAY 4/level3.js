// 1 & 2. Number of days in a month (with leap year)
let monthInput = prompt("Enter a month:");
monthInput = monthInput.toLowerCase();

let days;

switch (monthInput) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    days = 31;
    break;
  case "april":
  case "june":
  case "september":
  case "november":
    days = 30;
    break;
  case "february":
    let year = prompt("Enter a year:");
    year = Number(year);
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      days = 29; 
    } else {
      days = 28;
    }
    break;
  default:
    console.log("Invalid month");
    break;
}

if (days) {
  console.log(`${capitalize(monthInput)} has ${days} days.`);
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
