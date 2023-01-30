import { useState } from "react";
import { useBoard } from "../hooks/useBoard";
import { LineWinner } from "./LineWinner";
import { RenderIf } from "./RenderIf";
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

  return (
    <div className="flex flex-col items-center gap-8">
      <section>
        <RenderIf condition={!winner && isGameOver}>
          <h1 className="text-center text-2xl font-bold mb-8">Tie!</h1>
        </RenderIf>
        <RenderIf condition={winner === "X"}>
          <h1 className="text-center text-2xl font-bold mb-8">X wins!</h1>
        </RenderIf>
        <RenderIf condition={winner === "O"}>
          <h1 className="text-center text-2xl font-bold mb-8">O wins!</h1>
        </RenderIf>
        <RenderIf condition={!winner && !isGameOver}>
          <h1 className="text-center text-2xl font-bold mb-8">
            {player}'s turn
          </h1>
        </RenderIf>
        <div className="grid grid-cols-3 grid-rows-3 relative">
          {board.map((value, index) => (
            <Square
              key={index}
              value={value}
              disabled={value !== "" || Boolean(winner) || isGameOver}
              index={index}
              onClick={() => handleChooseSquare(index)}
            />
          ))}
          <RenderIf condition={Boolean(winner)}>
            <LineWinner board={board} />
          </RenderIf>
        </div>
      </section>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-80 py-4 rounded transition-colors duration-300"
        type="button"
        onClick={handleRestartGame}
      >
        Restart
      </button>
    </div>
  );
}
