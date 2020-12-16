## steps 步骤条

### 基础用法

```html
<template>
  <div class="content">
    <pl-swipe>
      <div>
        <pl-swipe-item class="pl-swipe-item">1</pl-swipe-item>
        <pl-swipe-item class="pl-swipe-item">2</pl-swipe-item>
        <pl-swipe-item class="pl-swipe-item">3</pl-swipe-item>
        <pl-swipe-item class="pl-swipe-item">4</pl-swipe-item>
      </div>
    </pl-swipe>
  </div>
</template>
```

### 自动播放

```html
<template>
  <div class="content">
    <pl-swipe :auto="2000">
      <div>
        <pl-swipe-item class="pl-swipe-item">1</pl-swipe-item>
        <pl-swipe-item class="pl-swipe-item">2</pl-swipe-item>
        <pl-swipe-item class="pl-swipe-item">3</pl-swipe-item>
        <pl-swipe-item class="pl-swipe-item">4</pl-swipe-item>
      </div>
    </pl-swipe>
  </div>
</template>
```


### 滚动事件

```html
<template>
  <div class="content">
    <pl-swipe @scroll="onScroll">
      <div>
        <pl-swipe-item class="pl-swipe-item">1</pl-swipe-item>
        <pl-swipe-item class="pl-swipe-item">2</pl-swipe-item>
        <pl-swipe-item class="pl-swipe-item">3</pl-swipe-item>
        <pl-swipe-item class="pl-swipe-item">4</pl-swipe-item>
      </div>
    </pl-swipe>
  </div>
</template>
<script>
  export default {
    methods: {
      onScroll (index) {
        console.log('index: ', index)
      }
    }
  }
</script>
```

### Swipe Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| auto                  | 自动轮播间隔，单位为 ms  | Number | — | — |
| duration              | 动画时长，单位为 ms    | Number | — | 300 |
| index                 | 初始位置索引值        | Number | — | 0 |
| loop                  | 是否开启循环播放       | Boolean | — | — |
| indicators            | 是否显示指示器        | Boolean | — | true |
| indicatorColor        | 指示器颜色          | String | — | #ffffff |
| indicatorActiveColor  | 指示器激活颜色        | String | — | #5074FF |
| indicatorSize         | 指示器大小          | String | — | 0.5em |
| vertical              | 是否为纵向滚动        | Boolean | — | — |
| touchable             | 是否可以通过手势滑动     | Boolean | — | true |


### SwipeItem Slots
| name      | 说明    | 
|---------- |-------- |
| (default) | 轮播内容 |

### Swipe Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| scroll     |   轮播事件   | 当前轮播图index | 
