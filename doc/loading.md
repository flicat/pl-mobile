## loading 加载图标

### 基础用法

```html
<template>
  <pl-loading>加载中...</pl-loading>
</template>
```

### 全局调用

```html
<script>
  export default {
    methods: {
      getAsyncData () {
        this.$loadingShow('加载中...')
        // async data
        this.$loadingHide()
      }      
    }
  }
</script>
```


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| vertical      | 是否垂直排列   | Boolean  | —            | false  |

### Slots
| name      | 说明    | 
|---------- |-------- |
| (default)     |   loading提示文字   |


### Global Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| $loadingShow | 打开loading | text：loading提示文字, vertical：是否垂直排列 |
| $loadingHide | 关闭loading | — |
