## collapse 折叠面板

### 基础用法

```html
<template>
  <pl-collapse v-model="active" title="面板">
    <p>面板内容</p>
  </pl-collapse>
</template>
<script>
  export default {
    data () {
      return {
        active: false
      }
    }
  }
</script>
```

### 自定义标题

```html
<template>
  <pl-collapse v-model="active">
    <div slot="title">自定义标题</div>
    <p>面板内容</p>
  </pl-collapse>
</template>
<script>
  export default {
    data () {
      return {
        active: true
      }
    }
  }
</script>
```

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value  | 是否展开    | boolean   | —   | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| title      | 面板标题   | String  | —            |   —     |

### Slots
| name      | 说明    |
|---------- |-------- |
| (default) |   面板内容    |
| title     |   面板标题   |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change     |   value更改事件   | 更改后的value |

### Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| toggle | 展开/关闭面板 | — |
