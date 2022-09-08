import { Board } from "../@types/Board";
import { getCurrentPlayer, getIsGameOver, getWinner } from "../utils/board";

export function useBoard(board: Board) {
  const player = getCurrentPlayer(board);
  const winner = getWinner(board);
  const isGameOver = getIsGameOver(board);
  return { player, winner, isGameOver };
}
