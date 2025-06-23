// Destructure constants
const constants = [2.72, 3.14, 9.81, 37, 100];
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;

// Destructure countries array
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
const [fin, est, sw, den, nor] = countries;

// Destructure rectangle object
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
};
const { width, height, area, perimeter } = rectangle;

console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);
console.log(fin, est, sw, den, nor);
console.log(width, height, area, perimeter);