## loading 加载图标

### 基础用法

```html
<template>
  <pl-loading>加载中...</pl-loading>
</template>
```


### 全局调用

```html
<script>
export default {
  methods: {
    showLoading() {
      let loading = this.$loading({ text: '加载中...' })
      setTimeout(() => {
        loading.close()
      }, 1000)
    }
  }
}
</script>
```

### 局部调用

```html
<template>
  <div class="box" ref="loadingBox"></div>
</template>
<script>
export default {
  methods: {
    showPartLoading() {
      let loading = this.$loading({ text: '加载中...', target: this.$refs.loadingBox })
      setTimeout(() => {
        loading.close()
      }, 1000)
    }
  }
}
</script>
```

### 指令调用

```html
<template>
  <pl-button type="primary" @click="isShow=!isShow">{{isShow ? '关闭' : '打开'}}loading指令</pl-button>
  <div class="box" v-loading="isShow"></div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
    }
  }
}
</script>
```

### 多指令调用

```html
<template>
  <pl-button type="primary" @click="isShow=!isShow">{{isShow ? '关闭' : '打开'}}指令1</pl-button>
  <pl-button type="primary" @click="isShow2=!isShow2">{{isShow2 ? '关闭' : '打开'}}指令2</pl-button>
  <div class="box" v-loading:登录中…="isShow" v-loading:加载中…="isShow2"></div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
      isShow2: false
    }
  }
}
</script>
```


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| vertical  | 是否垂直排列 | Boolean  | —            | false  |

### Slots
| name      | 说明    |
|---------- |-------- |
| (default)     |   loading提示文字   |

### Global Methods
| 方法名 | 说明 | 参数 |返回值 |
| ---- | ---- | ---- | ----  |
| $loading | 打开loading | \[Options] | LoadingObject  |

### Options
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| text      | loading文字   | String  | —            | —  |
| vertical  | 是否垂直排列   | Boolean  | —            | false  |
| target    | loading父节点   | Node  | —            | document.body  |

### LoadingObject
| 方法名 | 说明 | 参数 |返回值 |
| ---- | ---- | ---- | ----  |
| close | 关闭loading | — | —  |
