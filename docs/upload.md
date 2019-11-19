## upload 文件上传

### 基础用法

```html
<template>
  <pl-upload v-model="files"></pl-upload>
</template>
<script>
  export default {
    data () {
      return {
        files: []
      }
    }
  }
</script>
```

### 选择图片

```html
<template>
  <pl-upload v-model="files" accept="image/*" :maxCount="3"></pl-upload>
</template>
<script>
  export default {
    data () {
      return {
        files: []   // 只能选取3张
      }
    }
  }
</script>
```


### 文件读取前的回调函数

```html
<template>
  <pl-upload v-model="files" accept="image/*" :beforeRead="beforeRead"></pl-upload>
</template>
<script>
  export default {
    data () {
      return {
        files: []
      }
    },
    methods: {
      beforeRead (files) {
        return files[0] && /\.png$/.test(files[0].name) // 只能选择png图片
      }
    }
  }
</script>
```



### 文件数量和大小超出事件

```html
<template>
  <pl-upload v-model="files" accept="image/*" :maxSize="100000" :maxCount="4" @oversize="oversize" @exceed="exceed" multiple></pl-upload>
</template>
<script>
  export default {
    data () {
      return {
        files: []
      }
    },
    methods: {
      oversize (files) {
        this.$toast(`${files.map(file => file.name).join('、')}超出最大限制`)
      },
      exceed (size) {
        this.$toast(`文件数量已超出${size}张`)
      }
    }
  }
</script>
```




### 自定义组件

```html
<template>
  <pl-upload v-model="files" accept="image/*" class="file-upload">
    <span slot="tips">请选择图片，格式不限</span>
    <template v-slot="scope">
      <pl-button class="home" @click="setHomePage(scope.file)" size="small">设为首页</pl-button>
    </template>
    <pl-button slot="button" size="small">添加图片</pl-button>
  </pl-upload>
</template>
<script>
  export default {
    data () {
      return {
        files: []
      }
    },
    methods: {
      setHomePage (file) {
        console.log(file)
      }
    }
  }
</script>
<style scoped>
  .file-upload {
    position: relative;
  }
  .home {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>
```


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| accept     | 接受的文件类型 | String | —  |  * / *  |
| rows       | 每一行显示的文件数量  | Number  | —  | 4 |
| multiple   | 是否开启图片多选  |  Boolean  | —  | false  |
| disabled   | 是否禁用状态    | boolean   | —   | false   |
| capture    | 图片选取模式 | String | camera | —  |
| beforeRead | 文件读取前的回调函数，返回false可终止文件读取 | Function | —  | —  |
| afterRead  | 文件读取完成后的回调函数  |  Function  | —  | —  |
| maxSize    | 文件大小限制，单位为byte  |  Number  | —  | —  |
| maxCount   |  文件上传数量限制 |  Number  | —  | —  |

### Slots
| name      | 说明    | 
|---------- |-------- |
| (default)  | 自定义内容 |
| tips       | 提示文字 |
| button     | 图片添加按钮 |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change     |   value更改事件   | 更改后的value | 
| oversize   | 文件大小超出限制事件  |  超出大小的文件列表  |
| exceed     | 文件数量超出限制事件  | 超出的数量 |

