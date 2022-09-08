interface SquareProps {
  value: string;
  handleClick(): void;
}

export function Square({ value, handleClick }: SquareProps) {
  return (
    <button
      className="w-24 h-24 font-bold text-4xl bg-black text-white dark:bg-white dark:text-black"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}
