import { HTMLProps } from "react";

type SquareProps = HTMLProps<HTMLButtonElement> & {
  value: string;
  handleClick(): void;
};

export function Square({ value, handleClick, disabled }: SquareProps) {
  return (
    <button
      className="w-24 h-24 font-bold text-4xl bg-black text-white dark:bg-white dark:text-black disabled:cursor-not-allowed"
      onClick={handleClick}
      disabled={disabled}
    >
      {value}
    </button>
  );
}
