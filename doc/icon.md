## icon 图标

### 基础用法

```html
<template>
  <pl-checkbox v-model="value" :data="data" />
</template>
<script>
  export default {
    data () {
      return {
        value: [],
        data: [
          {label: '选项1', value: 1, disabled: false},
          {label: '选项2', value: 2, disabled: true}
        ]
      }           
    }
  }
</script>
```

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| name     | iconfont图标名称   | String  | —            |   —     |
| src      | 图片src，与name二选一   | String  | —            |   —     |
| fill     | 图标填充色   | String  | —            |   —     |
| stroke   | 图标描边色   | String  | —            |   —     |

