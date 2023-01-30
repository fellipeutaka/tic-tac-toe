import { victoriousPositions } from "@tic-tac-toe/constants/positions";
import { Board } from "../@types/Board";

export function getCurrentPlayer(board: Board) {
  const xAmountOnBoard = board.filter((value) => value === "X").length;
  const oAmountOnBoard = board.filter((value) => value === "O").length;

  return xAmountOnBoard <= oAmountOnBoard ? "X" : "O";
}

export function getWinner(board: Board) {
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
