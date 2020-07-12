开发中我们已习惯使用 ES6 的语法，如结构赋值，箭头函数，Promise 等新属性，那如何才能转换这些代码为 ES5 的语法提高浏览器的兼容性呢，需要借助`@rollup/plugin-babel`插件,该插件类似`webpack`中的`babel-loader`,能同 babel 发挥更大威力(该插件依赖`@babel/core`)

```bash
npm i @rollup/plugin-babel @babel/core @babel/preset-env core-js @babel/plugin-transform-runtime @babel/runtime --dev
```

```js
plugins: [
  babel({
    babelHelpers: "runtime",
  })
],
```

```bash
# browserslist
> 5%
last 2 versions
not ie <= 8
```

然后添加 babel.config.js 文件或.babelrc 文件

```js
// babel.config.js
module.exports = {
  presets: [
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
```
这样代码转换成ES5代码，并且为Promise，Symbol等语法在运行时加入polyfill，我们可以通过`@rollup/plugin-babel`配置的`include`和`exclude`来决定babel出转换范围
