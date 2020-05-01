// https://www.codewars.com/kata/555a67db74814aa4ee0001b5/train/javascript
// In this Kata we are passing a number (n) into a function.
// Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false.
// Numbers may be positive or negative, integers or floats.
// Floats are considered UNeven for this kata.

// Test.assertEquals(testEven(0), true, "testEven for 0");
// Test.assertEquals(testEven(0.5), false, "testEven for 0.5");
// Test.assertEquals(testEven(1), false, "testEven for 1");
// Test.assertEquals(testEven(2), true, "testEven for 2");
// Test.assertEquals(testEven(-4), true, "testEven for 2");

const { testEven, testEven2, testEven3 } = require("../isEven");

it("should return true when number is 0", () => {
  expect(testEven(0)).toBe(true);
  expect(testEven(0.5)).toBe(false);
  expect(testEven(1)).toBe(false);
  expect(testEven(2)).toBe(true);
  expect(testEven(-4)).toBe(true);
});

test("should check for even numbers", () => {
  expect(testEven2(2)).toBe(true);
});
