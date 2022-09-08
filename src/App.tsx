import { Board } from "./components/Board";

export function App() {
  return (
    <main className="flex flex-col justify-center items-center w-full min-h-screen gap-4 dark:bg-black dark:text-white transition-colors duration-300">
      <Board />
    </main>
  );
}
