// 1. Destructure countries object (example structure)
const detailedCountries = [
  {
    name: 'Finland',
    capital: 'Helsinki',
    population: 5540720,
    languages: ['Finnish', 'Swedish']
  },
  {
    name: 'Estonia',
    capital: 'Tallinn',
    population: 1326535,
    languages: ['Estonian']
  },
  {
    name: 'Sweden',
    capital: 'Stockholm',
    population: 10099265,
    languages: ['Swedish']
  }
];

detailedCountries.forEach(({ name, capital, population, languages }) => {
  console.log(name, capital, population, languages);
});

// 2. Destructure nested student array to get specific scores
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
const [name, skills, [, , jsScore, reactScore]] = student;
console.log(name, skills, jsScore, reactScore);

// 3. Convert array of arrays to array of objects
const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
];

function convertArrayToObject(arr) {
  return arr.map(([name, skills, scores]) => ({ name, skills, scores }));
}

console.log(convertArrayToObject(students));

// 4. Deep copy and enhance student object
const studentObj = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node', level: 7 },
      { skill: 'GraphQL', level: 8 }
    ],
    dataBase: [
      { skill: 'MongoDB', level: 7.5 }
    ],
    dataScience: ['Python', 'R', 'D3.js']
  }
};

const newStudent = {
  ...studentObj,
  skills: {
    ...studentObj.skills,
    frontEnd: [...studentObj.skills.frontEnd, { skill: 'BootStrap', level: 8 }],
    backEnd: [...studentObj.skills.backEnd, { skill: 'Express', level: 9 }],
    dataBase: [...studentObj.skills.dataBase, { skill: 'SQL', level: 8 }],
    dataScience: [...studentObj.skills.dataScience, 'SQL']
  }
};

console.log(newStudent);