## input 输入框

### 基础用法

```html
<template>
  <pl-input type="text" v-model="value" />
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


### 文本域

```html
<template>
  <pl-input type="textarea" rows="5" cols="10" v-model="value" />
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
  <pl-input v-model="value" :rules="rules" required ref="input" />
</template>
<script>
  export default {
    data () {
      return {
        value: '',
        rules: [{required: true, message: '请选择', trigger: 'change'}]
      }
    },
    methods: {
      submit () {
        this.$refs.input.validate().then(() => {
          // 提交
        })        
      }
    }
  }
</script>
```

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| rules      | 验证规则 [rules](./docs/form.md)  | Array  | —            |   —     |
| size       | 尺寸      | String    | normal / large / small   |  normal    |
| placeholder | 占位符   | String | — | —   |
| type       | 表单类型，原生字段 | String | text / number / search / texarea        |  text   |
| wrap       | label是否折行显示  | boolean   | —   | false   |
| disabled   | 是否禁用状态    | boolean   | —   | false   |
| required   | 必填红色*号    | boolean   | —   | false   |
| rows       | texarea的rows属性     | String | —           |  —      |
| cols       | texarea的cols属性     | String | —           |  —      |
| label      | label文字    | string   | —   | —   |
| labelWidth | label宽度    | string   | —   | —   |
| clearable  | 是否显示清除按钮 | boolean | —      |  false    |

### Slots
| name      | 说明    | 
|---------- |-------- |
| label     |   label文字   |
| prepend   |   输入框前置内容  |
| append    |   输入框后置内容 |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change     |   value更改事件   | 更改后的value | 
| input      |   输入事件     | 更改后的value | 
| clear      |   value清除事件   | 更改后的value | 

### Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| validate | 表单验证方法 | — |
| clearValidate | 清除验证错误提示 | — |
