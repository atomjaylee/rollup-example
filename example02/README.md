### 1. `@rollup/plugin-node-resolve`

#### 简介：

该插件使用 node 算法能精准定位我们代码中引入的 node_modules 中的第三方插件

#### 用处:

```js
// 源码
import _array from "lodash/array";

// 1. 未使用插件
var _array = _interopDefault(require("lodash/array"));

// 2. 使用插件
var array = {
  chunk: chunk_1,
  compact: compact_1,
  concat: concat_1,
  difference: difference_1,
  differenceBy: differenceBy_1,
  differenceWith: differenceWith_1,
  drop: drop_1,
  // ....
};
```

未使用该插件之前，我们发现 lodash 插件被以 require 的形式引入进来，并没有真正的将使用的代码打入到包中，使用后可以精准的导入我们代码中引入的模块代码

### 2. `@rollup/plugin-commonjs`

#### 简介：

用于将 CommonJs 的模块转化成 ES6模块

#### 用处:

```js
// ModuleA.js
module.exports = React;

// 1. 未使用插件
// Error: 'default' is not exported by ModuleA.js, imported by index.js

// 2. 使用插件后不报错，正常打包
```
我们将代码中的模块使用node常用的CommonJs的方式导出，在其他地方通过ES6的方式导入时会报错，我们需要引入该插件，将CommonJs的引入方式转换成ES6的导入方式
