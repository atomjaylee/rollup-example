如果自己封装 Vue 组件然后发布到 npm 上，但是存在问题就是 npm 安装后代码在 node_modules 中，而日常的的基于 webpack 开发的项目中 babel 等 loader 的处理一般都是跳过 node_modules 中的代码的，否则解析速度会特别的慢，所以我们需要在发布到 npm 之前，将我们的 Vue 组件通过 rollup 处理成 commonJs 模块，在开发环境直接引用，

```bash
npm i rollup-plugin-vue --dev
```

```js
import Vue from "rollup-plugin-vue";

export default {
  input: "./index.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
  },
  plugins: [Vue()],
};
```

`rollup-plugin-vue`这个插件仅对于正常的 Vue 代码进行处理，如.vue 格式或.js 文件中使用 render(h)方式来 html 渲染都可以正常处理，但是如果我们使用了 jsx 格式来写时就会报错了

```bash
[!] Error: Unexpected token
packages/MixedComponent/MixedComponent.vue?rollup-plugin-vue=script.js (11:11)
 9:   },
10:   render() {
11:     return <div class="mixClass">{this.source ? "yes" : "no"}</div>
               ^
12:   }
13: }
```

所以针对 jsx 的方式，我们需要专门处理

```bash
# babel7x
npm i @vue/babel-preset-jsx @vue/babel-helper-vue-jsx-merge-props --dev

#babel6x
npm i babel-plugin-transform-vue-jsx
```

因为依赖 babel 处理，需要新建`babel.config.js`进行配置

```js
module.exports = {
  presets: [
    "@vue/babel-preset-jsx",
    {
      injectH: false, // 我们也可以手动关闭某些功能，还有 functional, vModel, vOn等
    },
  ],
};
```

通过上述配置，所有 vue 代码形式就都可以编译成 commonJs 模块

现在编译出来 vue 会变成 render 模式，但是存在问题就是.vue 文件中 ES6 中新语法还是转换不过来，所以还是需要添加 babel 的 polyfill 功能， 根据 example03 配置，修改配置为

```js
// babel.config.js

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
```

```js
// rollup.config.js
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
```
