import { Board } from "../@types/Board";

export function getCurrentPlayer(board: Board) {
  const x = board.reduce(
    (previousValue, currentValue) =>
      currentValue === "X" ? previousValue + 1 : previousValue,
    0
  );
  const o = board.reduce(
    (previousValue, currentValue) =>
      currentValue === "O" ? previousValue + 1 : previousValue,
    0
  );
  return x <= o ? "X" : "O";
}

export function getWinner(board: Board) {
  const horizontalVictoriousPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];
  const verticalVictoriousPositions = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  const diagonalVictoriousPositions = [
    [0, 4, 8],
    [2, 4, 6],
  ];
  const victoriousPositions = [
    ...horizontalVictoriousPositions,
    ...verticalVictoriousPositions,
    ...diagonalVictoriousPositions,
  ];
  const x = board.map((value) => (value === "X" ? "X" : null));
  const o = board.map((value) => (value === "O" ? "O" : null));
  const xWins = victoriousPositions.some((list) =>
    list.every((number) => x[number] !== null)
  );
  const oWins = victoriousPositions.some((list) =>
    list.every((number) => o[number] !== null)
  );
  if (xWins) {
    return "X";
  } else if (oWins) {
    return "O";
  } else {
    return null;
  }
}

export function getIsGameOver(board: Board) {
  const winner = getWinner(board);
  const isBoardFilled = board.every((value) => value !== "");
  return Boolean(winner) || isBoardFilled;
}
