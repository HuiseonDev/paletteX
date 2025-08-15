import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default [
  // React build
  {
    input: "src/index.ts",
    output: [
      { file: "dist/react/index.esm.js", format: "esm", sourcemap: true },
      { file: "dist/react/index.js", format: "cjs", sourcemap: true },
    ],
    plugins: [
      peerDepsExternal(),
      typescript({
        tsconfig: "./tsconfig.json",
        declaration: true,
        declarationDir: "dist/react",
      }),
      postcss({ extract: "dist/button-library.css", minimize: true }),
    ],
    external: ["react", "react-dom"],
  },

  // Vanilla build
  {
    input: "src/vanilla-index.js",
    output: [
      { file: "dist/vanilla/index.esm.js", format: "esm", sourcemap: true },
      { file: "dist/vanilla/index.js", format: "cjs", sourcemap: true },
    ],
    plugins: [postcss({ extract: "dist/button-library.css", minimize: true })],
  },
];
