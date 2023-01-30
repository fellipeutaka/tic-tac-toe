import {
  diagonalVictoriousPositions,
  horizontalVictoriousPositions,
  verticalVictoriousPositions,
} from "@tic-tac-toe/constants/positions";
import { clsx } from "clsx";

type LineWinnerProps = {
  board: string[];
};

function generateLinePositions(board: string[]) {
  const horizontalPositions = horizontalVictoriousPositions.map(
    (position, index) => {
      const key =
        index === 0
          ? "top-[16.5%]"
          : index === 1
          ? "bottom-1/2"
          : "bottom-[16.5%]";
      return {
        [key]:
          position.every((squareIndex) => board.at(squareIndex) === "X") ||
          position.every((squareIndex) => board.at(squareIndex) === "O"),
      };
    }
  );
  const verticalPositions = verticalVictoriousPositions.map(
    (position, index) => {
      const key =
        index === 0
          ? "left-[16.5%] -translate-x-1/2 bottom-1/2 rotate-90"
          : index === 1
          ? "left-1/2 -translate-x-1/2 bottom-1/2 rotate-90"
          : "left-[83.5%] -translate-x-1/2 bottom-1/2 rotate-90";
      return {
        [key]:
          position.every((squareIndex) => board.at(squareIndex) === "X") ||
          position.every((squareIndex) => board.at(squareIndex) === "O"),
      };
    }
  );
  const diagonalPositions = diagonalVictoriousPositions.map(
    (position, index) => {
      const key =
        index === 0
          ? "left-1/2 scale-125 -translate-x-1/2 bottom-1/2 rotate-45"
          : "left-[83.5%] scale-125 -translate-x-[83.5%] bottom-1/2 rotate-[135deg]";
      return {
        [key]:
          position.every((squareIndex) => board.at(squareIndex) === "X") ||
          position.every((squareIndex) => board.at(squareIndex) === "O"),
      };
    }
  );
  return [...horizontalPositions, ...verticalPositions, ...diagonalPositions];
}

export function LineWinner({ board }: LineWinnerProps) {
  return (
    <div
      className={clsx(
        "absolute h-0.5 bg-white animate-line",
        generateLinePositions(board)
      )}
    />
  );
}
