// ===== Level 1 =====
const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python'];
const age = 25;
const isMarried = false;

const student = {
  firstName: 'Avenald',
  lastName: 'Jacla',
  age: 25,
  isMarried: false,
  skills: ['HTML', 'CSS', 'JS']
};

// Convert to JSON string
const skillsJSON = JSON.stringify(skills);
const ageJSON = JSON.stringify(age);
const isMarriedJSON = JSON.stringify(isMarried);
const studentJSON = JSON.stringify(student);

console.log('Skills JSON:', skillsJSON);
console.log('Age JSON:', ageJSON);
console.log('IsMarried JSON:', isMarriedJSON);
console.log('Student JSON:', studentJSON);



