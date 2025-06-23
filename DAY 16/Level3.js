// ===== Level 3 =====
// Given text JSON (this is a string, not an object yet)
const txt = `{
  "Alex": {
    "email": "alex@alex.com",
    "skills": ["HTML", "CSS", "JavaScript"],
    "age": 20,
    "isLoggedIn": false,
    "points": 30
  },
  "Asab": {
    "email": "asab@asab.com",
    "skills": ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"],
    "age": 25,
    "isLoggedIn": false,
    "points": 50
  },
  "Brook": {
    "email": "brook@brook.com",
    "skills": ["HTML", "CSS", "JavaScript", "React"],
    "age": 30,
    "isLoggedIn": true,
    "points": 50
  },
  "Daniel": {
    "email": "daniel@daniel.com",
    "skills": ["HTML", "CSS", "JavaScript", "Python"],
    "age": 20,
    "isLoggedIn": false,
    "points": 40
  },
  "John": {
    "email": "john@john.com",
    "skills": ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    "age": 20,
    "isLoggedIn": true,
    "points": 50
  },
  "Thomas": {
    "email": "thomas@thomas.com",
    "skills": ["HTML", "CSS", "JavaScript", "React"],
    "age": 20,
    "isLoggedIn": false,
    "points": 40
  },
  "Paul": {
    "email": "paul@paul.com",
    "skills": ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
    "age": 20,
    "isLoggedIn": false,
    "points": 40
  }
}`;

// Parse string to object
const users = JSON.parse(txt);

// Find user with the most skills
let mostSkilledUser = '';
let maxSkills = 0;

for (const user in users) {
  const numSkills = users[user].skills.length;
  if (numSkills > maxSkills) {
    maxSkills = numSkills;
    mostSkilledUser = user;
  }
}

console.log('User with the most skills:', mostSkilledUser);
console.log('Number of skills:', maxSkills);