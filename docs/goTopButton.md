## goTopButton 返回顶部按钮

### 基础用法

```html
<template>
  <div class="wrap" ref="wrap">
    <p>1</p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <p>2</p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <p>3</p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <pl-go-top-button :target="wrap" />
  </div>
</template>
<script>
  export default {
    data () {
      return {
        wrap: null
      }
    },
    mounted () {
      this.wrap = this.$refs.wrap.parentNode
    }
  }
</script>

<style>
  html,body,.wrap {
    width: 100%;
    height: 100%;
  }
  .wrap {
    overflow: auto;
  }
</style>
```

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| target      | 滚动容器   | Node/window  | —            |   —     |
| offset      | 偏移量，当容器滚动大于offset则显示按钮   | Number  | —            |   —     |
