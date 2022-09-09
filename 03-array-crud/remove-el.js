/**
 * @Delete Specific element:
 *
 */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

//remove first element
numbers.shift();

//remove last element
numbers.pop();
numbers.length = numbers.length - 1;

//remove inside elements: splice using index
numbers.splice(2, 1);

//remove inside elements: splice using value
const toBeDeleted = 5;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === toBeDeleted) {
    numbers.splice(i, 1);
    break;
  }
}

//filter array
const toBeDeleted1 = 6;
numbers = numbers.filter((element) => element !== toBeDeleted1);

// const arrOfNums = [10, 20, 30, 40];
// let newArr = [];
// for (let i = 0; i < arrOfNums.length; i++) {
//   //   console.log(arrOfNums[i]);
//   if (arrOfNums[i] !== 20) {
//     newArr[newArr.length] = arrOfNums[i];
//   }
// }
// console.log(newArr);

//delete operator
delete numbers[1];

//reset whole array
let x = [1, 2, 3];
let y = x;
x = [];
// console.log(x, y);

//alternative
let xx = [1, 2, 3];
let yy = xx;
xx.length = 0;
// console.log(xx, yy);

//reset array using while loop
while (numbers.length) numbers.pop();

console.log(numbers);
