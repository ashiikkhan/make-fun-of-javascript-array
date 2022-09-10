/**
 * @title: Array Push and Pull Methods:
 */
const Stack = require('./basic-implement');
const stack = new Stack();
const text = 'HELLO';

for (let i = 0; i < text.length; i++) {
  stack.push(text.charAt(i));
}

let reversedText = '';
while (!stack.isEmpty()) {
  reversedText = reversedText + stack.pop();
}
console.log(reversedText);

/**
 * @Javascript Array Stack Methods:
 */
const text1 = 'ASHIK';
const jsStack = [];
for (let i = 0; i < text1.length; i++) {
  jsStack.push(text1.charAt(i));
}
console.log(jsStack);
let result1 = '';
while (jsStack.length) result1 += jsStack.pop();
console.log(result1);
