## popup 弹出框

### 基础用法

```html
<template>
  <pl-popup position="bottom" ref="popup">
    <div class="popup-inner">这是一个弹框</div>
  </pl-popup>
</template>

<script>
  export default {
    methods: {
      open () {
        this.$refs.popup.open()
      }
    }
  }
</script>
```

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| position        | 弹窗位置 | String | top / bottom / right / left / center | center |
| clickClose        | 点击背景关闭弹窗 | Boolean | — | true |

### Slots
| name      | 说明    |
|---------- |-------- |
| (default)     |   弹窗内容   |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| open | 弹窗打开事件 | — |
| close | 弹窗关闭事件 | — |

### Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| open  | 打开弹窗 | — |
| close | 关闭弹窗 | — |
