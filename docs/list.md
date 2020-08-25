## list 列表

### 基础用法

```html
<template>
  <pl-list :loading="loading" :finished="finished">
    <p v-for="item in data" :key="item.value">{{item.label}}</p>  
  </pl-list>
</template>
<script>
  export default {
    data () {
      return {
        loading: false,
        finished: false,
        data: [
          {label: '选项1', value: 1},
          {label: '选项2', value: 2}
        ]
      }           
    }
  }
</script>
<style>
  .pl-list {
    height: 100%;
  }
</style>
```


### 下拉刷新

```html
<template>
  <pl-list :loading="loading" :finished="finished" @refresh="reload" loadingText="加载中..." refreshText="松开刷新">
    <p v-for="item in data" :key="item.value">{{item.label}}</p>  
  </pl-list>
</template>
<script>
  export default {
    data () {
      return {
        loading: false,
        finished: false,
        data: [
          {label: '选项1', value: 1},
          {label: '选项2', value: 2}
        ]
      }           
    },
    methods: {
      reload () {
        this.finished = false
        // load date
      }
    }
  }
</script>
<style>
  .pl-list {
    height: 100%;
  }
</style>
```



### 上拉加载

```html
<template>
  <pl-list :loading="loading" :finished="finished" @load="load" loadingText="加载中..." finishedText="加载完成">
    <p v-for="item in data" :key="item.value">{{item.label}}</p>  
  </pl-list>
</template>
<script>
  export default {
    data () {
      return {
        loading: false,
        finished: false,
        data: [
          {label: '选项1', value: 1},
          {label: '选项2', value: 2}
        ]
      }           
    },
    methods: {
      load () {
        // load date
      }
    }
  }
</script>
<style>
  .pl-list {
    height: 100%;
  }
</style>
```


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| loading      |  是否处于加载状态，加载过程中不触发load事件   | Boolean | —    | false |
| finished     | 是否已加载完成，加载完成后不再触发load事件 | Boolean | —            | false |
| autoLoad     | 是否滚动到底部自动加载，如果传入数字值则在距离该值的高度触发加载事件 | [Boolean, Number] | —            | false |
| loadingText  | 加载过程中的提示文字| String | —            | — |
| refreshText  | 下拉刷新的提示文案  | String | —            | — |
| finishedText | 加载完成后的提示文字 | String | —            | — |
| errorText    | 加载失败后的提示文字 | String | —            | — |
| topButton    | 是否显示返回顶部按钮 | Boolean | —            | false |

### Slots
| name      | 说明    | 
|---------- |-------- |
| (default)     |   列表项   |
| top-loading     |   头部下拉加载 loading   |
| top-refresh     |   头部下拉刷新提示语   |
| bottom-loading     |   底部加载 loading   |
| bottom-finished     |   底部加载完成提示语   |


### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| refresh     |   下拉刷新事件   | — | 
| load     |   上拉加载事件   | — | 


