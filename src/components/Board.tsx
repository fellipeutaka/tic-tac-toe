import { useState } from "react";
import { useBoard } from "../hooks/useBoard";
import { Square } from "./Square";

const boardInitialState = Array<string>(9).fill("");

export function Board() {
  const [board, setBoard] = useState(boardInitialState);
  const { player, winner, isGameOver } = useBoard(board);
  console.log({ winner, isGameOver });

  if (winner === "X") {
    alert("X wins");
  }

  if (winner === "O") {
    alert("O wins");
  }

  if (!winner && isGameOver) {
    alert("Tie!");
  }

  function handleChooseSquare(index: number) {
    const boardCopy = [...board];
    boardCopy[index] = player;
    setBoard(boardCopy);
  }

  function handleRestartGame() {
    setBoard(boardInitialState);
  }

  return (
    <section className="grid grid-cols-3 grid-rows-3 gap-2">
      {board.map((value, index) => (
        <Square
          key={index}
          value={value}
          handleClick={() => handleChooseSquare(index)}
        />
      ))}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-colors duration-300"
        onClick={handleRestartGame}
      >
        Restart
      </button>
    </section>
  );
}
