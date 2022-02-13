import vue from "rollup-plugin-vue";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default [
  {
    input: "src/main.js",
    output: [
      {
        format: "esm",
        file: "dist/lib/core-ui.mjs",
      },
      {
        format: "cjs",
        file: "dist/lib/core-ui.js",
      },
    ],
    plugins: [vue(), peerDepsExternal(), nodeResolve()],
  },
];
