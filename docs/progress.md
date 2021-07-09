## progress 进度条

### 基础用法

```html
<template>
  <pl-progress :progress="60" />
</template>
```

### 环形进度条

```html
<template>
  <pl-progress :progress="60" type="circle" />
</template>
```

### 设置大小

```html
<template>
  <pl-progress :progress="60" style="font-size: 60px" />
</template>
```
### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| progress  | 进度（0 - 100）  | Number    | — |  0    |
| type  | 进度条类型  | String    | circle / bar |  bar    |
