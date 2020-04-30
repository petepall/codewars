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

points(games);
