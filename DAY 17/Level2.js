/ ===== Level 2 =====/
// Create and store student object
const student = {
  firstName: 'Avenald',
  lastName: 'Jacla',
  age: 21,
  skills: ['HTML', 'CSS', 'JavaScript'],
  country: 'Philippines',
  enrolled: true
};

localStorage.setItem('student', JSON.stringify(student));

console.log('Level 2 student object stored in localStorage');

