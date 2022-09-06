/**
 * the call stack : one thread == one call stack == one thing at a time.
 * call stack is a data structure which records basically where in the programm we are
 */
//call stack

function multipy(a, b) {
  return a * b;
}

function square(n) {
  return multipy(n, n);
}

function printSquare(n) {
  const squared = square(n);
  console.log(squared);
}

printSquare(5);
