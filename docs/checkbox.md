## checkbox 复选框

### 基础用法

```html
<template>
  <pl-checkbox v-model="value" :options="data" />
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


### 显示label的用法

```html
<template>
  <pl-checkbox v-model="value" :options="data" label="请选择：" labelWidth="5em" />
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


### 表单验证

```html
<template>
  <pl-checkbox v-model="value" :options="data" :rules="rules" required ref="checkbox" />
</template>
<script>
  export default {
    data () {
      return {
        value: [],
        data: [
          {label: '选项1', value: 1, disabled: false},
          {label: '选项2', value: 2, disabled: true}
        ],
        rules: [{required: true, message: '请选择', trigger: 'change', type: 'number'}]
      }
    },
    methods: {
      submit () {
        this.$refs.checkbox.validate().then(() => {
          // 校验成功
        }).catch(e => {
          // 校验失败
        })
      }
    }
  }
</script>
```


### 竖排样式

```html
<template>
  <pl-checkbox v-model="value" :trueValue="true" vertical :falseValue="false">开关</pl-checkbox>
</template>
<script>
  export default {
    data () {
      return {
        value: false,
      }
    }
  }
</script>
```


### 按钮样式

```html
<template>
  <pl-checkbox v-model="value" :trueValue="true" button :falseValue="false">开关</pl-checkbox>
</template>
<script>
  export default {
    data () {
      return {
        value: false,
      }
    }
  }
</script>
```


### 开关按钮

```html
<template>
  <pl-checkbox v-model="value" :trueValue="true" :falseValue="false">开关</pl-checkbox>
</template>
<script>
  export default {
    data () {
      return {
        value: false,
      }
    }
  }
</script>
```




### 自定义子项

```html
<template>
  <pl-checkbox v-model="value" :options="data">
    <template v-slot="scope">{{scope.item.label}} - {{scope.item.value}}</template>
  </pl-checkbox>
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
| rules      | 验证规则 [rules](https://github.com/yiminghe/async-validator)   | Array  | —            |   —     |
| size       | 尺寸  | String    | normal / large / small   |  normal    |
| options    | 选项列表   | Array    | — | —   |
| prop       | 选项对应的key与value   | Object    | — | {label: 'label', value: 'value', disabled: 'disabled'}   |
| trueValue  | 没有提供data时的勾选值    | —   | —   | —   |
| falseValue | 没有提供data时的非勾选值    | —   | —   | —   |
| wrap       | label是否折行显示  | boolean   | —   | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| required   | 必填红色*号    | boolean   | —   | false   |
| button     | 是否是按钮样式    | boolean   | —   | false   |
| vertical   | 是否是竖向排列    | boolean   | —   | false   |
| label      | label文字    | string   | —   | —   |
| labelWidth | label宽度    | string   | —   | —   |

### Slots
| name      | 说明    |
|---------- |-------- |
| (default)     |   列表子选项   |
| label     |   label文字   |
| prepend   |   输入框前置内容  |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change     |   value更改事件   | 更改后的value |

### Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| validate | 表单验证方法 | — |
| clearValidate | 清除验证错误提示 | — |
