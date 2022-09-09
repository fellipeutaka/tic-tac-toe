import { HTMLProps } from "react";

type SquareProps = HTMLProps<HTMLButtonElement> & {
  value: string;
  index: number;
  handleClick(): void;
};

export function Square({ value, handleClick, disabled, index }: SquareProps) {
  function getBorderStyle() {
    const indexesWithoutBorderRight = [2, 5, 8];
    if (index === 8) {
      return "";
    } else if (indexesWithoutBorderRight.includes(index)) {
      return "border-b border-blue-500";
    } else if (index > 5) {
      return "border-r border-blue-500";
    } else {
      return "border-r border-b border-blue-500";
    }
  }

  return (
    <button
      className={`w-24 h-24 font-bold text-4xl ${getBorderStyle()} disabled:cursor-not-allowed`}
      onClick={handleClick}
      disabled={disabled}
    >
      {value}
    </button>
  );
}
