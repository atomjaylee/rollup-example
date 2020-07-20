module.exports = {
  presets: [
    "@vue/babel-preset-jsx",
    [
      "@babel/preset-env",
      {
        modules: false, // 不进行语法转换
        useBuiltIns: "usage", // 按需导入polyfill
        corejs: 3, // 使用core-js 3版本
      },
    ],
  ],
  plugins: ["@babel/plugin-transform-runtime"],
};
