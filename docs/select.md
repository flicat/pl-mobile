## select 下拉菜单

### 基础用法

```html
<template>
  <pl-select v-model="value" :options="data"></pl-select>
</template>
<script>
  export default {
    data () {
      return {
        value: null,
        data: [
          {label: '选项1', value: 1, disabled: false},
          {label: '选项2', value: 2, disabled: false},
          {label: '选项3', value: 3, disabled: true}
        ]
      }
    }
  }
</script>
```

### 多选
```html
<template>
  <pl-select v-model="value" :options="data" multiple></pl-select>
</template>
<script>
  export default {
    data () {
      return {
        value: null,
        data: [
          {label: '选项1', value: 1, disabled: false},
          {label: '选项2', value: 2, disabled: false},
          {label: '选项3', value: 3, disabled: true}
        ]
      }
    }
  }
</script>
```

### 表单验证
```html
<template> 
  <pl-select ref="select" :rules="rules" label="请选择：" labelWidth="5em" v-model="value" :options="data" @change="change" clearable></pl-select> 
</template>
<script>
  export default {
    data () {
      return {
        value: null,
        rules: [{required: true, message: '请输入', trigger: 'change'}],
        data: [
          {label: '选项1', value: 1, disabled: false},
          {label: '选项2', value: 2, disabled: false},
          {label: '选项3', value: 3, disabled: true}
        ]
      }
    },
    methods: {
      submit () {
        this.$refs.select.validate().then(() => {
          // 提交
        })
      },
      change (value) {
        console.log('change::', value)
      }
    }
  }
</script>
```
 

### 自定义子项
```html
<template>
  <div class="content">
    <pl-select v-model="value" :options="data">
      <template v-slot="scope">
        <span>{{scope.item.label}}-{{scope.item.value}}</span>
      </template>
    </pl-select>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        value: null,
        data: [
          {label: '选项1', value: 1, disabled: false},
          {label: '选项2', value: 2, disabled: false},
          {label: '选项3', value: 3, disabled: true}
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
| placeholder | 占位符   | String | — | —   |
| prop       | 选项对应的key与value   | Object    | — | {label: 'label', value: 'value'}   |
| wrap       | label是否折行显示  | boolean   | —   | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| multiple  | 是否多选    | boolean   | —   | false   |
| readonly  | 是否只读状态    | boolean   | —   | false   |
| required   | 必填红色*号    | boolean   | —   | false   |
| label      | label文字    | string   | —   | —   |
| labelWidth | label宽度    | string   | —   | —   |
| clearable  | 是否显示清除按钮 | boolean | —      |  false    |


### Slots
| name      | 说明    | 
|---------- |-------- |
| (default)  | 自定义列表子选项   |
| label     |   label文字   |
| prepend   |   输入框前置内容  |
| append    |   输入框后置内容 |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change     |   value更改事件   | 更改后的value | 

### Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| validate | 表单验证方法 | — |
| clearValidate | 清除验证错误提示 | — |
