import nodeResolve from "@rollup/plugin-node-resolve";
import commonJs from "@rollup/plugin-commonjs";

export default {
  input: "./index.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
  },
  plugins: [nodeResolve(), commonJs()],
};
