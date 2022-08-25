/**array initialization: constructor pattern vs factory pattern  */
//constructor pattern use new keyword but factory dont**

//constructor pattern
const arr1 = new Array();
console.log(arr1, arr1.length);
// [] 0

const arr2 = new Array(5);
console.log(arr2, arr2.length);
// [ <5 empty items> ] 5

const arr3 = new Array(1, 2, 3, 4, 5);
console.log(arr3, arr3.length);
// [ 1, 2, 3, 4, 5 ] 5

//factory pattern :
const arr4 = Array();
console.log(arr4, arr4.length);
// [] 0

const arr5 = Array(5);
console.log(arr5, arr5.length);
// [ <5 empty items> ] 5

const arr6 = Array(1, 2, 3, 4, 5);
console.log(arr6, arr6.length);
// [ 1, 2, 3, 4, 5 ] 5
