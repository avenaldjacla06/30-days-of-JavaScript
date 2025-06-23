const users = {
  Alex: { email: 'alex@alex.com', skills: ['HTML', 'CSS', 'JavaScript'], age: 20, isLoggedIn: false, points: 30 },
  Asab: { email: 'asab@asab.com', skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'], age: 25, isLoggedIn: false, points: 50 },
  Brook: { email: 'daniel@daniel.com', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'], age: 30, isLoggedIn: true, points: 50 },
  Daniel: { email: 'daniel@alex.com', skills: ['HTML', 'CSS', 'JavaScript', 'Python'], age: 20, isLoggedIn: false, points: 40 },
  John: { email: 'john@john.com', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'], age: 20, isLoggedIn: true, points: 50 },
  Thomas: { email: 'thomas@thomas.com', skills: ['HTML', 'CSS', 'JavaScript', 'React'], age: 20, isLoggedIn: false, points: 40 },
  Paul: { email: 'paul@paul.com', skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'], age: 20, isLoggedIn: false, points: 40 }
};

// Find person with most skills
let mostSkilled = '';
let maxSkills = 0;
for (let user in users) {
  if (users[user].skills.length > maxSkills) {
    maxSkills = users[user].skills.length;
    mostSkilled = user;
  }
}
console.log('Most skilled user:', mostSkilled);

// Count logged in users and users with >= 50 points
let loggedInCount = 0;
let highPointsCount = 0;
for (let user in users) {
  if (users[user].isLoggedIn) loggedInCount++;
  if (users[user].points >= 50) highPointsCount++;
}
console.log('Logged in users:', loggedInCount);
console.log('Users with >= 50 points:', highPointsCount);

// Find MERN stack developers
let mernDevelopers = [];
for (let user in users) {
  const skills = users[user].skills;
  if (skills.includes('MongoDB') && skills.includes('Express') && skills.includes('React') && skills.includes('Node')) {
    mernDevelopers.push(user);
  }
}
console.log('MERN Developers:', mernDevelopers);

// Add your name to the users object (without modifying original)
const newUsers = { ...users, MyName: { email: 'me@email.com', skills: ['HTML'], age: 18, isLoggedIn: true, points: 10 } };
console.log(newUsers);

// Get all keys and values
console.log(Object.keys(users));
console.log(Object.values(users));

// Country object example
const countries = {
  Philippines: {
    capital: 'Manila',
    population: 113000000,
    languages: ['Filipino', 'English']
  }
};
console.log(`Country: Philippines`);
console.log(`Capital: ${countries.Philippines.capital}`);
console.log(`Population: ${countries.Philippines.population}`);
console.log(`Languages: ${countries.Philippines.languages.join(', ')}`);
