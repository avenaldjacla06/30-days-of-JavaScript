// Human-readable time with leading zeros
let now2 = new Date();
let y3 = now2.getFullYear();
let mo3 = String(now2.getMonth() + 1).padStart(2, '0');
let d3 = String(now2.getDate()).padStart(2, '0');
let h3 = String(now2.getHours()).padStart(2, '0');
let min3 = String(now2.getMinutes()).padStart(2, '0');

console.log(`${y3}-${mo3}-${d3} ${h3}:${min3}`);
