const arr2 = [80, 53, 560, 74, 100, 12, 14, 12];
let largestNumber = arr2[0];
let secondLargest = 0;
for (let i = 1; i < arr2.length; i++) {
  if (arr2[i] > largestNumber) {
    secondLargest = largestNumber;
    largestNumber = arr2[i];
  } else if (arr2[i] < largestNumber && arr2[i] > secondLargest) {
    secondLargest = arr2[i];
  }
}

console.log(largestNumber);
console.log(secondLargest);

let smallestNum = arr2[0];
let secondSmallest = 0;
for (let i = 1; i < arr2.length; i++) {
  if (arr2[i] < smallestNum) {
    secondSmallest = smallestNum;
    smallestNum = arr2[i];
  } else if (arr2[i] > smallestNum && arr2[i] < secondLargest) {
    secondSmallest = arr2[i];
  }
}
console.log(smallestNum);
console.log(secondSmallest);
