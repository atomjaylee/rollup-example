开发中我们已习惯使用 ES6 的语法，如结构赋值，箭头函数，Promise 等新属性，那如何才能转换这些代码为 ES5 的语法提高浏览器的兼容性呢，需要借助`@rollup/plugin-babel`插件,该插件类似`webpack`中的`babel-loader`,能同 babel 发挥更大威力(该插件依赖`@babel/core`)

```js
plugins: [
  babel({
    
  })
],
```
