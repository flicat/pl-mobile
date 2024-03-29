## form 表单

### 基础用法

```html
<template>
  <pl-form ref="form">
    <pl-input v-model="value" />
  </pl-form>
</template>
<script>
  export default {
    data () {
      return {
        value: ''
      }
    }
  }
</script>
```


### 统一设置 size/labelWidth/disabled

```html
<template>
  <pl-form labelWidth="5em" size="small" disabled>
    <pl-input v-model="value" label="用户名：" />
  </pl-form>
</template>
<script>
  export default {
    data () {
      return {
        value: ''
      }
    }
  }
</script>
```


### 表单验证

```html
<template>
  <div class="content">
    <pl-form labelWidth="5em" ref="form">
      <pl-input v-model="value" :rules="rules.input" required ref="input" label="名字：" />
      <pl-select :options="options" :rules="rules.select" v-model="value" label="请选择：" required></pl-select>
      <pl-range v-model="rangeValue" :rules="rules.range" :min="0" :max="100" :step="1" label="请选择：" labelWidth="5em" required>
        <span slot="prepend">0%</span>
        <span slot="append">{{rangeValue}}%</span>
      </pl-range>
      <pl-radio v-model="value" :options="options" :rules="rules.radio" label="单选：" required></pl-radio>
      <pl-checkbox v-model="checkboxValue" :options="options" :rules="rules.checkbox" required ref="checkbox" label="多选："></pl-checkbox>
      <p>
        <pl-button @click="submit" type="primary">提交</pl-button>
      </p>
    </pl-form>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        value: '',
        rangeValue: null,
        checkboxValue: [],
        options: [
          {label: '选项1', value: 1},
          {label: '选项2', value: 2},
          {label: '选项3', value: 3}
        ],
        rules: {
          input: [{required: true, message: '请输入', trigger: 'blur'}],
          select: [{required: true, message: '请输入', trigger: 'change', type: 'number'}],
          range: [{required: true, message: '请输入', trigger: 'change', type: 'number'}],
          checkbox: [{required: true, message: '请输入', trigger: 'change', type: 'array'}],
          radio: [{required: true, message: '请输入', trigger: 'change', type: 'number'}]
        }
      }
    },
    methods: {
      submit () {
        this.$refs['form'].validate().then(() => {
          // 校验成功
        }).catch(e => {
          // 校验失败
        })
      }
    }
  }
</script>
```

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size       | 尺寸  | String    | normal / large / small   |  normal    |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| showError  | 是否在表单中显示错误信息    | boolean   | —   | true   |
| labelWidth | label宽度    | string   | —   | —   |

### Slots
| name      | 说明    |
|---------- |-------- |
| (default)     |   —   |

### Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| validate | 表单验证方法 | — |
| clearValidate | 清除验证错误提示 | — |
