## goTopButton 返回顶部按钮

### 基础用法

```html
<template>
  <pl-go-top-button :target="body" />
</template>
<script>
  export default {
    data () {
      return {
        body: document.body        
      }           
    }
  }
</script>
```

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| target      | 滚动容器   | Node/window  | —            |   —     |
| offset      | 偏移量，当容器滚动大于offset则显示按钮   | Number  | —            |   —     |
