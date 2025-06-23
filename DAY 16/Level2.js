// ===== Level 2 =====
// Only include firstName, lastName, and skills
const filteredStudentJSON = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 2);
console.log('Filtered Student JSON:', filteredStudentJSON);
