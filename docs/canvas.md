## canvas 签字板

### 基础用法

```html
<template>
  <div class="content">
    <pl-canvas class="canvas" ref="canvas"></pl-canvas>
    <pl-button @click="clear" type="primary">清除画布</pl-button>
    <pl-button @click="getImageDataUrl" type="primary">获取dataURL</pl-button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        src: ''
      }
    },
    methods: {
      clear () {
        this.$refs.canvas.clear()
      },
      getImageDataUrl () {
        this.src = this.$refs.canvas.getImageDataUrl()
      }
    }
  }
</script>
```

### 获取 jpg 格式的 Blob 图片对象 

```html
<template>
  <div class="content">
    <pl-canvas class="canvas" ref="canvas"></pl-canvas>
    <pl-button @click="getImageBlob" type="primary">获取BLob</pl-button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        src: ''
      }
    },
    methods: {
      getImageBlob () {
        let result = this.$refs.canvas.getImageBlob('image/jpeg')
        this.src = URL.createObjectURL(result)
      }
    }
  }
</script>
```

### 横向画板

```html
<template>
  <div class="content">
    <pl-canvas class="canvas" ref="canvas" orientation="right">
      <span slot="placeholder">请在此处签名</span>
    </pl-canvas>
  </div>
</template>
```

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size    | 笔触大小  | Number    | —   |  14    |
| orientation    | 画布朝向    | String   | top / right / bottom / left  | top   |
| penId    | 笔触id    | Number   | 0 / 1  |  0  |
| fillStyle    | canvas背景色，设置后会遮挡住placeholder，如果需要导出jpg图片，则必须设置，否则会产生黑底    | String   | —  |  —  |

### Slots
| name      | 说明    | 
|---------- |-------- |
| placeholder  |  画布空白遮罩  |

### Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| clear | 清空画板 | — |
| getImageDataUrl | 获取图像 DataUrl | [type, encoderOptions] |
| getImageBlob | 获取图像 Blob | [type, encoderOptions] |



### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| drawStart    |   开始绘画   | — | 
| drawing    |   绘画中   | — | 
| drawEnd    |   绘画结束   | — | 
| clear    |   清除画布   | — | 
