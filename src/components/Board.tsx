import { useState } from "react";
import { useBoard } from "../hooks/useBoard";
import { Square } from "./Square";

const boardInitialState = Array<string>(9).fill("");

export function Board() {
  const [board, setBoard] = useState(boardInitialState);
  const { player, winner, isGameOver } = useBoard(board);

  function handleChooseSquare(index: number) {
    const boardCopy = [...board];
    boardCopy[index] = player;
    setBoard(boardCopy);
  }

  function handleRestartGame() {
    setBoard(boardInitialState);
  }

  function renderBoard() {
    if (winner === "X") {
      return <span>X wins!</span>;
    } else if (winner === "O") {
      return <span>O wins!</span>;
    } else if (!winner && isGameOver) {
      return <span>Tie!</span>;
    } else {
      return board.map((value, index) => (
        <Square
          key={index}
          value={value}
          handleClick={() => handleChooseSquare(index)}
        />
      ));
    }
  }

  return (
    <section className="grid grid-cols-3 grid-rows-3 gap-2">
      {renderBoard()}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-colors duration-300"
        onClick={handleRestartGame}
      >
        Restart
      </button>
    </section>
  );
}
