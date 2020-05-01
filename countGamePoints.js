const games = ["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"];

function points(games) {
  let points = 0;
  for (game of games) {
    if (game[0] > game[2]) {
      points += 3;
    } else if (game[0] === game[2]) {
      points += 1;
    }
  }
  return points;
}

console.log(points(games));

/**
 * Sums the results of the matches given in an array
 *
 * @param {any} games Array matche results
 */
const pointAlternative = (games) =>
  games.reduce((calc, current) => {
    return (calc += current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0);
  }, 0);

console.log(pointAlternative(games));

module.exports = { points, pointAlternative };
