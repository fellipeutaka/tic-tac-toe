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
      return <span className="text-center text-2xl font-bold">X wins!</span>;
    } else if (winner === "O") {
      return <span className="text-center text-2xl font-bold">O wins!</span>;
    } else if (!winner && isGameOver) {
      return <span className="text-center text-2xl font-bold">Tie!</span>;
    } else {
      return (
        <section>
          <h1 className="text-center text-2xl font-bold mb-8">
            {player}'s turn
          </h1>
          <div className="grid grid-cols-3 grid-rows-3">
            {board.map((value, index) => (
              <Square
                key={index}
                value={value}
                disabled={value !== ""}
                index={index}
                handleClick={() => handleChooseSquare(index)}
              />
            ))}
          </div>
        </section>
      );
    }
  }

  return (
    <div className="flex flex-col items-center gap-8">
      {renderBoard()}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-80 py-4 rounded transition-colors duration-300"
        onClick={handleRestartGame}
      >
        Restart
      </button>
    </div>
  );
}
