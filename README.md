### typescript 编译配置

```js
include: [] // 指定编译的内容文件
exclude: [] // 不编译的内容文件
files: [] // 指定编译的内容文件

compilerOptions： {
  incremental: true,      // 增量编译
  allowJs： true，      // 编译js文件
  removeComments: true,   // 去掉注释
  // ...
  noImplicitAny: false,   // 可以不明确指定any类型
  strictNullChecks： false, // 不强制检测null类型
}
```

