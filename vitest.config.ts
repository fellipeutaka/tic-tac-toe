import { defineConfig } from "vitest/config";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    exclude: ["node_modules", "dist"],
  },
  plugins: [viteTsconfigPaths()],
});
