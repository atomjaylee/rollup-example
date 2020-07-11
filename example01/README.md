Rollup 的 output 选项可接受对象和数组两种形式，其中 format 字段表格打包出来的格式,主要有
| 格式 | 描述 |
|------|---------------------------------------------|
| cjs | CommonJs 标准，以 node 常用的 module\.exports 导出 |
| amd | RequireJS 标准，以 define 定义 |
| umd | 通用模块，同时支持 CommonJs 标准和 RequireJs 标准 \- 需要传递 name |
| iife | 浏览器模块，立即调用表达式，将变量挂载在 window 上\- 需要传递 name |
| es | ES modules 模块 |

Rollup 默认支持 Tree-Shaking 功能，通过打包内容我们可以看到无用代码块未被打包进来
