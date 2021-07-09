## range 滑动框

### 基础用法
```html
<template>
  <pl-range v-model="value" :min="0" :max="100" :step="1"></pl-range>
  <pl-range v-model="value" :min="0" :max="100" :step="1" label="请选择："></pl-range>
</template>

<script>
  export default {
    data () {
      return {
        value: 0
      }
    }
  }
</script>
```

### 尺寸大小
```html
<template>
  <pl-range v-model="value" :min="0" :max="100" :step="1" label="请选择：" size="small"></pl-range>
  <pl-range v-model="value" :min="0" :max="100" :step="1" label="请选择：" size="normal"></pl-range>
  <pl-range v-model="value" :min="0" :max="100" :step="1" label="请选择：" size="large"></pl-range>
</template>

<script>
  export default {
    data () {
      return {
        value: 0
      }
    }
  }
</script>
```

### 标题换行
```html
<template>
  <pl-range v-model="value" :min="0" :max="100" :step="1" label="请选择：" wrap></pl-range>
</template>

<script>
  export default {
    data () {
      return {
        value: 0
      }
    }
  }
</script>
```

### 禁用
```html
<template>
  <pl-range v-model="value" :min="0" :max="100" :step="1" label="请选择：" disabled></pl-range>
</template>

<script>
  export default {
    data () {
      return {
        value: 0
      }
    }
  }
</script>
```

### 表单验证

```html
<template>
  <pl-range v-model="value" :min="0" :max="100" :step="1" label="请选择：" :rules="rules" ref="range" required></pl-range>
</template>
<script>
  export default {
    data () {
      return {
        value: null,
        rules: [{required: true, message: '请选择', trigger: 'change'}]
      }
    },
    methods: {
      submit () {
        this.$refs.range.validate().then(() => {
          // 校验成功
        }).catch(e => {
          // 校验失败
        })
      }
    }
  }
</script>
```

### 图标填充
```html
<template>
  <pl-range v-model="value" :min="0" :max="100" :step="1" label="请选择：" required>
    <pl-icon name="icon-dingwei" fill="#999" slot="prepend"></pl-icon>
    <span slot="append">{{value}}%</span>
  </pl-range>
  <pl-range v-model="value" :min="0" :max="100" :step="1" label="请选择：" required wrap>
    <pl-icon name="icon-dingwei" fill="#999" slot="prepend"></pl-icon>
    <span slot="append">{{value}}%</span>
  </pl-range>
</template>

<script>
  export default {
    data () {
      return {
        value: 0
      }
    }
  }
</script>
```

### 自定义滑块
```html
<template>
  <pl-range v-model="value" :min="0" :max="100" :step="1" label="请选择：" required>
    <span slot="thumb" class="thumb">{{value}}%</span>
  </pl-range>
</template>

<script>
  export default {
    data () {
      return {
        value: 0
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
| min        | 最小值 | Number | — | — |
| max        | 最大值 | Number | — | — |
| step       | step进度间隔 | Number | — | — |
| wrap       | label是否折行显示  | boolean   | —   | false   |
| disabled   | 是否禁用状态    | boolean   | —   | false   |
| required   | 必填红色*号    | boolean   | —   | false   |
| label      | label文字    | string   | —   | —   |
| labelWidth | label宽度    | string   | —   | —   |


### Slots
| name      | 说明    |
|---------- |-------- |
| label     |   label文字   |
| prepend   |   选择框前置内容  |
| append    |   选择框后置内容 |
| thumb    |   自定义滑块 |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change     |   value更改事件   | 更改后的value |

### Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| validate | 表单验证方法 | — |
| clearValidate | 清除验证错误提示 | — |
