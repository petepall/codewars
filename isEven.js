// https://www.codewars.com/kata/555a67db74814aa4ee0001b5/train/javascript
// In this Kata we are passing a number (n) into a function.
// Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false.
// Numbers may be positive or negative, integers or floats.
// Floats are considered UNeven for this kata.

function testEven(n) {
  return n % 2 === 0 ? true : false;
}

console.log(testEven(0));
console.log(testEven(0.5));
console.log(testEven(1));
console.log(testEven(2));
console.log(testEven(-4));

// Test.assertEquals(testEven(0), true, "testEven for 0");
// Test.assertEquals(testEven(0.5), false, "testEven for 0.5");
// Test.assertEquals(testEven(1), false, "testEven for 1");
// Test.assertEquals(testEven(2), true, "testEven for 2");
// Test.assertEquals(testEven(-4), true, "testEven for 2");

// Alternative 1 solution
function testEven2(n) {
  return n % 2 === 0;
}

console.log(testEven2(0));
console.log(testEven2(0.5));
console.log(testEven2(1));
console.log(testEven2(2));
console.log(testEven2(-4));

// Alternative 2 solution
function testEven3(n) {
  return !(n % 2);
}

console.log(testEven3(0));
console.log(testEven3(0.5));
console.log(testEven3(1));
console.log(testEven3(2));
console.log(testEven3(-4));

module.exports = { testEven, testEven2, testEven3 };
