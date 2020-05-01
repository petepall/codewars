const { points, pointAlternative } = require("../countGamePoints");

test("should add up game points", () => {
  const games = ["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"];
  expect(points(games)).toBe(30);
});

it("should return 1 points", () => {
  const game = ["1:1"];
  expect(points(game)).toBe(1);
});

it("should return 3 points", () => {
  const game = ["2:1"];
  expect(points(game)).toBe(3);
});

it("should return 0 points", () => {
  const game = ["1:2"];
  expect(points(game)).toBe(0);
});

test("should add up to a total game point", () => {
  const games = ["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:4", "1:3"];
  expect(pointAlternative(games)).toBe(28);
});
