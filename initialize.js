/**Initialize Array - literal */

//Array literal :
const arr = [];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[99] = 100;
// console.log(arr);
//[ 1, 2, 3, <96 empty items>, 100 ]
// console.log(arr.length);

//length = lasIndex + 1;
//lastIndex = length - 1;

// example 2

const names = ['ashik', 'mahmud', 'noman', 'mujakkir', 'zubo'];
// set element in the last index of the arra
names[names.length] = 'topu';
console.log(names);
