import { type ComponentProps } from "react";

import { clsx } from "clsx";

type SquareProps = ComponentProps<"button"> & {
  value: string;
  index: number;
};

const indexesWithoutBorderRight = [2, 5, 8];

export function Square({ value, disabled, index, ...props }: SquareProps) {
  return (
    <button
      className={clsx(
        "h-24 w-24 text-4xl font-bold disabled:cursor-not-allowed",
        {
          "border-b border-blue-500":
            indexesWithoutBorderRight.includes(index) && index < 8,
        },
        {
          "border-r border-blue-500": index > 5 && index < 8,
        },
        {
          "border-b border-r border-blue-500":
            !indexesWithoutBorderRight.includes(index) && index <= 5,
        },
      )}
      {...props}
      disabled={disabled}
      type="button"
      aria-label={String(index)}
    >
      {value}
    </button>
  );
}
