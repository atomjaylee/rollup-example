export default {
  input: "./index.js",
  output: [
    { file: "dist/bundle.cjs.js", format: "cjs" },
    { file: "dist/bundle.es.js", format: "es" },
    { file: "dist/bundle.amd.js", format: "amd" },
    { file: "dist/bundle.umd.js", format: "umd", name: "rollTest" },
    { file: "dist/bundle.iife.js", format: "iife", name: "rollTest" },
  ],
};
