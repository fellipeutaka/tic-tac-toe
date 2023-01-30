import { getCurrentPlayer, getIsGameOver, getWinner } from "./board";

const emptyBoard = Array<string>(9).fill("");

test("get current player", () => {
  const player = getCurrentPlayer(emptyBoard);
  expect(player).toEqual("X");
  {
    const board = ["X", "", "", "O", "", "X", "", "", ""];
    const player = getCurrentPlayer(board);
    expect(player).toEqual("O");
  }
});

test("get winner", () => {
  const victoriousBoard = [
    { winner: "X", board: ["X", "X", "X", "O", "", "", "O", "", ""] },
    { winner: "O", board: ["", "X", "X", "O", "O", "O", "", "", ""] },
    { winner: null, board: ["", "", "", "", "", "", "", "", ""] },
  ];
  victoriousBoard.forEach((victorious) => {
    const winner = getWinner(victorious.board);
    expect(winner).toEqual(victorious.winner);
  });
});

test("get game is over", () => {
  const overedBoard = ["X", "X", "X", "O", "", "", "O", "", ""];
  expect(getIsGameOver(overedBoard)).toBe(true);
  expect(getIsGameOver(emptyBoard)).toBe(false);
});
