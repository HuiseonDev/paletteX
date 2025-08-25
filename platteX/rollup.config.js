import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";

export default [
  // React 빌드
  {
    input: "src/index.ts",
    output: [
      { file: "dist/react/index.esm.js", format: "esm", sourcemap: true },
      { file: "dist/react/index.js", format: "cjs", sourcemap: true },
    ],
    plugins: [
      peerDepsExternal(),
      typescript(),
      postcss({ extract: "dist/button-library.css" }),
      terser(),
    ],
  },
  // TypeScript 선언 파일
  {
    input: "dist/types/index.d.ts",
    output: [{ file: "dist/react/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
  // 바닐라 JS 빌드
  {
    input: "src/vanilla-index.js",
    output: [
      { file: "dist/vanilla/index.esm.js", format: "esm", sourcemap: true },
      { file: "dist/vanilla/index.js", format: "cjs", sourcemap: true },
    ],
    plugins: [
      postcss({ extract: "dist/button-library.css" }),
      terser(),
      resolve({ extensions: [".js"] }),
    ],
  },
];
