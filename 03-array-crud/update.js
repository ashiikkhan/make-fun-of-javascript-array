/**
 * Update existing array elements:
 */

//easy one:
const numbers = [1, 2, 7, 4, 5];
numbers[2] = 3;
// console.log(numbers);

const students = [
  { id: 1, name: 'ashik' },
  { id: 2, name: 'sobuj' },
  { id: 3, name: 'lazy' },
  { id: 4, name: 'programmer' },
  { id: 5, name: 'prob solver' },
];
const givenId = 3;
const updatedName = 'Lazy Programmer';

for (const student of students) {
  if (givenId === student.id) {
    student.name = updatedName;
    break;
  }
}
console.log(students);
