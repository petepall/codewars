const cloneArray = require("../cloneArray");

test("should validate if an array is equal to another", () => {
  const array = [1, 2, 3];
  expect(cloneArray(array)).toStrictEqual(array);
  expect(cloneArray(array)).not.toBe(array);
});
