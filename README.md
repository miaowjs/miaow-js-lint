# miaow-js-lint

> Miaow的JS代码质量检查工具, 支持ESLint和JSHint两种方式

## 使用说明

### 安装

```
npm install miaow-js-lint --save-dev
```

### 在项目的 miaow.config.js 中添加模块的 tasks 设置

```javascript
//miaow.config.js
module: {
  tasks: [
    {
      test: /\.js$/,
      plugins: ['miaow-js-lint']
    }
  ]
}
```

* engine 设置检查引擎, 默认是ESLint
* config 设置检查配置, 这个会覆盖`.eslintrc`或`.jshintrc`里面的配置
