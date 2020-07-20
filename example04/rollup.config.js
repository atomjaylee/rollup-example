import Vue from "rollup-plugin-vue";
import Babel from "@rollup/plugin-babel";

export default {
  input: "./index.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
  },
  plugins: [
    Vue(),
    Babel({
      babelHelpers: "runtime",
      extensions: [".js", ".jsx", ".es6", ".es", ".mjs", ".vue"], // 否则template模式下会出现编译后出现const的情况
    }),
  ],
};
