/**
 * @title: Update Array and Fill Array
 */

//Array fill manual way
const arr1 = new Array(10);
// console.log(arr1);

//array fill
const arr2 = new Array(10);

const names = ['ashik', 'mahmud', 'nooman'];

//fill array and update array
const response = new Array(9);
response.fill(false);

for (let i = 0; i < response.length; i++) {
  const rand = Math.floor(Math.random() * 10 + 1);
  response[i] = rand > 5 ? 'X' : 'O';
}

// console.log(response);

//array is mutable
function update(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = `${i + 1}. ${arr[i]}`;
  }
  return arr;
}
const updateNames = update(names);
console.log(names);
console.log(updateNames);
console.log(names === updateNames);
