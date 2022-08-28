/**Array Traverse
 *
 */

const arr = [1, 2, 3, 4, 5];
//we can store elements of array inside any variable.
const n = arr[3];
const m = arr[2];
const x = 1;
// console.log(n, m, arr[x], arr[x - 1]);

//simple traverse
//array index starts from 0; we can traverse them by for loop;
for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
}

//array sum and avg

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  //   sum = sum + arr[i];
  sum += arr[i];
}
// console.log(sum);
// console.log(sum / arr.length);

/**
 * sum = 0;
 * sum = 0 + 1 = 1;
 * sum = 1 + 2 = 3;
 * sum = 3 + 3 = 6;
 * sum = 6 + 4 = 10;
 * sum = 10 + 5 = 15;
 * sum = updated sum value + value of array elements
 * so now sum = 15;
 */

//find large number
/**to find the large number we have to assume that the first number is the largest number
 * then we will compare rest of the numbers one by one with this number.
 * if we get the larger number from this number we will update our assumption value with the newly found large number.
 * the again do the same : compare > if get larger > set it as largest .
 */

const arr2 = [80, 53, 560, 74, 100, 12, 14, 12];
let largestNumber = arr2[0];
let secondLargest = 0;
for (let i = 1; i < arr2.length; i++) {
  if (arr2[i] > largestNumber) {
    secondLargest = largestNumber;
    largestNumber = arr2[i];
  } else if (arr2[i] !== largestNumber && arr2[i] > secondLargest) {
    secondLargest = arr2[i];
  }
}
console.log(largestNumber);
console.log(secondLargest);

//find smallest number:
let smallestNumber = arr2[0];
let secondSmallest = 0;
for (let i = 1; i < arr2.length; i++) {
  if (arr2[i] < smallestNumber) {
    secondSmallest = smallestNumber;
    smallestNumber = arr2[i];
  } else if (arr2[i] !== smallestNumber && arr2[i] < secondSmallest) {
    secondSmallest = arr2[i];
  }
}
console.log(smallestNumber);
console.log(secondSmallest);

/**
 * important :
 * array index starts from 0; we can traverse them by for loop;
 * we can store elements of array inside any variable.
 * *Why should I traverse?
 * we can find sum by traversing , we can find avrg by traversing etc .. [example above]
 *
 */
