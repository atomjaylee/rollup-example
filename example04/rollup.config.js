import Vue from "rollup-plugin-vue";
import Babel from "@rollup/plugin-babel";

export default {
  input: "./index.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
  },
  plugins: [Babel(), Vue()],
};
