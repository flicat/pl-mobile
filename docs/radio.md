## radio 单选框

### 基础用法

```html
<template>
  <pl-radio v-model="value" :options="data" />
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

### 按钮样式

```html
<template>
  <pl-radio v-model="value" :options="data" button />
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

### 竖向排列

```html
<template>
  <pl-radio v-model="value" :options="data" vertical />
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
  <pl-radio v-model="value" :options="data" label="请选择：" labelWidth="5em" />
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
  <pl-radio v-model="value" :options="data" :rules="rules" required ref="radio" />
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
        rules: [{required: true, message: '请选择', trigger: 'change'}]
      }
    },
    methods: {
      submit () {
        this.$refs.radio.validate().then(() => {
          // 提交
        })        
      }
    }
  }
</script>
```


### 自定义子项

```html
<template>
  <pl-radio v-model="value" :options="data">
    <template v-slot="scope">{{scope.item.label}} - {{scope.item.value}}</template>
  </pl-radio>
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
| rules      | 验证规则 [rules](./docs/form.md)   | Array  | —            |   —     |
| size       | 尺寸  | String    | normal / large / small   |  normal    |
| options    | 选项列表   | Array    | — | —   |
| prop       | 选项对应的key与value   | Object    | — | {label: 'label', value: 'value', disabled: 'disabled'}   |
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
