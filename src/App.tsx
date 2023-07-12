import { Board } from "./components/Board";

export function App() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center gap-4 transition-colors duration-300 dark:bg-black dark:text-white">
      <Board />
    </main>
  );
}
