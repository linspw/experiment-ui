/* eslint-disable consistent-return */
import { defineConfig } from "vitest/config";
import vuePlugin from "@vitejs/plugin-vue";
import { alias } from "./configs/project/alias-config";

export default defineConfig({
  plugins: [vuePlugin()],
  resolve: {
    alias,
  },
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./configs/tests/vitest.setup.ts"],

    env: {
      NODE_ENV: "test",
    },
    onConsoleLog: (log) => {
      // Silence logs coming from vue <Suspense> is experimental, and stdout | unknown component before it
      if (log.includes("<Suspense")) return false;
    },
  },
});
