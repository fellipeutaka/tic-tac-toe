export const horizontalVictoriousPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];

export const verticalVictoriousPositions = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

export const diagonalVictoriousPositions = [
  [0, 4, 8],
  [2, 4, 6],
];

export const victoriousPositions = [
  ...horizontalVictoriousPositions,
  ...verticalVictoriousPositions,
  ...diagonalVictoriousPositions,
];
