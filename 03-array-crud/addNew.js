/**
 * add new elements:
 *
 */
//use push to insert at the end:
const arrP1 = [1, 2, 3, 4];
const arrP2 = [7, 8];
arrP1[arrP1.length] = 5;
// console.log(arrP1);
arrP1.push(6);
// console.log(arrP1);
// arrP1.push(...arrP2);
Array.prototype.push.apply(arrP1, arrP2);
// console.log(arrP1);

//use unshift to insert at the beginning:
const arrU1 = [2, 3, 4];
const arrU2 = [-2, -1, 0];
arrU1.unshift(1);
arrU1.unshift(...arrU2);
// console.log(arrU1);

//use splice to insert at the given index:
const arrS1 = [1, 2, 4, 6, 9];
const arrS2 = [7, 8];
arrS1.splice(2, 0, 3);
arrS1.splice(4, 0, 5);
arrS1.splice(6, 0, ...arrS2);

console.log(arrS1);
