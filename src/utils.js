export const crossMatch = [
  [
    [0, 1],
    [2, 3],
  ],
  [
    [0, 2],
    [1, 3],
  ],
  [
    [0, 3],
    [1, 2],
  ],
  [
    [3, 0],
    [2, 1],
  ],
  [
    [2, 0],
    [3, 1],
  ],
  [
    [1, 0],
    [3, 2],
  ],
];

export const winFlag = (winner) => {
  return winner === "left" ? "left" : winner === "right" ? "right" : "draw";
};

export const goMatch = (leftTeam, rightTeam, isDraw = true) => {
  let [leftPower, rightPower] = [leftTeam.clubPower, rightTeam.clubPower];

  const powerSub = Math.abs(leftPower - rightPower);
  let drawPer = 0.32 - 0.02 * (powerSub + 1);
  if (!isDraw) drawPer = 0;

  const leftWinPer = (1 - drawPer) * (leftPower / (leftPower + rightPower));
  const random = Math.random();

  if (random < leftWinPer) {
    if (!isDraw) return leftTeam;
    return "left";
  } else if (leftWinPer < random && random < leftWinPer + drawPer) {
    return "draw";
  } else {
    if (!isDraw) return rightTeam;
    return "right";
  }
};

export const getRandomClub = (clubs) => {
  if (clubs.length < 1) return null;

  const possibleClubs = clubs.filter(
    (club) => club.selectable === "selectable"
  );
  const random = Math.floor(Math.random() * possibleClubs.length);
  return possibleClubs[random];
};
