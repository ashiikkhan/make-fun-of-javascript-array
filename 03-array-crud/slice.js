/**
 * @title: silce array into multiple array:
 */

const arr = [1, 2, 3, 4, 5, 6];
//slice
const sliced = arr.slice(1, 3);
//@param-start is inclusive
//@param-end is exclusive
console.log(sliced);
//clone array
const cloned = arr.slice();
console.log(cloned);
//array like objects to array
function toArr() {
  return Array.prototype.slice.call(arguments);
}
const argArr = toArr(23, 43, 53, 'test');
console.log(argArr.__proto__.constructor());
