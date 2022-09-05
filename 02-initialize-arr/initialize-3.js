/**@Ttile: Array of Anything
 *
 */
//Array of Objects:
const favChannels = [
  { name: 'stack learner', url: 'https://youtube.com/stacklearner' },
  { name: 'learn with sumit', url: 'https://youtube.com/lws' },
  { name: 'js bangladesh', url: 'https://youtube.com/js-bangladesh' },
  { name: 'traversy media', url: 'https://youtube.com/traversymedia' },
];

//Array of Functions:
const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const times = (a, b) => a * b;
const div = (a, b) => a / b;
const mod = (a, b) => a % b;

const funcs = [sum, sub, times, div, mod];
const a = 10;
b = 20;

for (let i = 0; i < funcs.length; i++) {
  const result = funcs[i](a, b);
  //   console.log(`${funcs[i].name} = ${result}`);
}

//array of arrays:
const pointTable = [
  [0, 0],
  [3, 5],
  [5, 7],
  [10, 23],
];
//one dimensional traverse:
for (let i = 0; i < pointTable.length; i++) {
  //   console.log(
  //     `Point ${i}: x = ${pointTable[i][0]} and y = ${pointTable[i][1]}`
  //   );
}

//two dimensional array:
const numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers[i].length; j++) {
    console.log(numbers[i][j]);
  }
}
