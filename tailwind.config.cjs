/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      keyframes: {
        line: {
          from: {
            opacity: 0,
            width: "0",
          },
          to: {
            opacity: 1,
            width: "100%",
          },
        },
      },
      animation: {
        line: "line 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards",
      },
    },
  },
  plugins: [],
};
