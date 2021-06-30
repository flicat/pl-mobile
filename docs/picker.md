## picker 滑动选择框

### 基础用法

```html
<template>
  <div class="wrap">
    <pl-button @click="open">打开</pl-button>
    <pl-picker title="选择" :options="data" :prop="prop" ref="picker" @submit="submit" :defaultValue="value"></pl-picker>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        value: [2, 6],
        data: {
          children: [
            {label: '选项1', value: 1, children: [
              {label: '子选项3', value: 3},
              {label: '子选项4', value: 4}
            ]},
            {label: '选项2', value: 2, children: [
              {label: '子选项5', value: 5},
              {label: '子选项6', value: 6}
            ]}
          ]
        },
        prop: {
          label: 'label',
          value: 'value',
          children: 'children'
        }
      }
    },
    methods: {
      open () {
        this.$refs.picker.open()
      },
      submit (val) {
        this.value = val
      }
    }
  }
</script>
```

### 动态生成

```html
<template>
  <div class="wrap">
    <pl-button @click="open">打开</pl-button>
    <pl-picker title="选择" :options="data" ref="picker" @submit="submit"></pl-picker>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        value: [],
        data: [
          function () {
            return [1, 2, 3, 4, 5, 6 ,7 ,8, 9]
          },
          function (val1) {
            return [1, 2, 3, 4, 5, 6 ,7 ,8, 9].map(item => [val1, item].join('-'))
          },
          function (val1, val2) {
            return [1, 2, 3, 4, 5, 6 ,7 ,8, 9].map(item => [val2, item].join('-'))
          }
        ]
      }
    },
    methods: {
      open () {
        this.$refs.picker.open()
      },
      submit (val) {
        this.value = val
      }
    }
  }
</script>
```

### 自定义选项

```html
<template>
  <div class="wrap">
    <pl-button @click="open">打开</pl-button>
    <pl-picker title="选择" :options="data" :prop="prop" ref="picker" @submit="submit" :defaultValue="value">
      <template v-slot="scope">{{scope.item.label}} - {{scope.item.value}}</template>
    </pl-picker>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        value: [2, 6],
        data: {
          children: [
            {label: '选项1', value: 1, children: [
              {label: '子选项3', value: 3},
              {label: '子选项4', value: 4}
            ]},
            {label: '选项2', value: 2, children: [
              {label: '子选项5', value: 5},
              {label: '子选项6', value: 6}
            ]}
          ]
        },
        prop: {
          label: 'label',
          value: 'value',
          children: 'children'
        }
      }
    },
    methods: {
      open () {
        this.$refs.picker.open()
      },
      submit (val) {
        this.value = val
      }
    }
  }
</script>
```


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title        | 弹窗标题 | String | — | — |
| defaultValue | 默认值 | Array | — | — |
| options      | 下拉选项 | Array | 回调式：[function() {}]，嵌套式：{children: [{children: []}]} | — |
| prop        | 显示的标签和值，如果没有传递则拿整个子项 | Object | — | {label: null, value: null, children: null} |

### Slots
| name      | 说明    |
|---------- |-------- |
| (default)     |   自定义列表项   |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| cancel | 取消事件 | — |
| submit | 提交事件 | 已选择的值 |

### Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| open  | 打开弹窗 | — |
| close | 关闭弹窗 | — |
