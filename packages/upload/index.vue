<template>
  <div class="pl-upload">
    <div class="rows" :style="rowStyle">
      <div class="cols" v-for="(file, i) in files" :key="i">
        <div class="pl-file-preview">
          <div class="pl-upload-img" :style="{'background-image': `url(${file.preview})`}" @click="preview(i, file)"></div>
          <div class="pl-upload-del" v-if="!disabled" @click="delFile(i)">
            <icon name="icon-roundclosefill"></icon>
          </div>
          <slot :file="file"></slot>
        </div>
      </div>
      <div class="cols" v-if="!disabled && files.length < maxCount">
        <div class="pl-upload-button">
          <input type="file" class="file-input" :multiple="multiple" :accept="accept" :capture="capture" @change="setFiles">
          <slot name="button">
            <div class="pl-add-button">
              <icon name="icon-jia" class="pl-upload-add"></icon>
            </div>
          </slot>
        </div>
      </div>
    </div>
    <slot name="tips"></slot>

    <div class="pl-preview-dialog" v-if="dialogPreview">
      <ul class="preview-list"
        ref="preview-list"
        :style="{transform: `translateX(${-translateX}px)`}"
        @touchstart="touchEvent($event)"
        @touchmove="touchEvent($event)"
        @touchend="touchEvent($event)"
        @touchcancel="touchEvent($event)"
        @click="closePreview">
        <li class="preview-item"
          v-for="(file, i) in files"
          :key="i"
          :style="{'background-image': `url(${file.preview})`, 'left': i * 100 + '%'}"
        ></li>
      </ul>
      <div class="preview-index">{{previewIndex + 1}}/{{files.length}}</div>
    </div>
  </div>
</template>

<script>
  import icon from '../icon/index.vue'
  import {is} from '../../src/assets/utils'

  export default {
    name: 'plUpload',
    componentName: 'plUpload',
    components: {
      icon
    },
    props: {
      value: Array,
      accept: {         // 接受的文件类型
        type: String,
        default: '*/*'
      },
      rows: {
        type: Number,             // 文件列表项宽
        default: 4
      },
      multiple: Boolean,          // 是否开启图片多选，部分安卓机型不支持
      disabled: Boolean,          // 是否禁用文件上传
      capture: String,            // 图片选取模式，可选值为 camera (直接调起摄像头)
      beforeRead: Function,       // 文件读取前的回调函数，返回false可终止文件读取
      afterRead: Function,        // 文件读取完成后的回调函数
      maxSize: {                  // 文件大小限制，单位为byte
        type: Number,
        default: Infinity
      },
      maxCount: {                 // 文件上传数量限制
        type: Number,
        default: Infinity
      }
    },
    data () {
      return {
        files: [],

        dialogPreview: false,
        previewIndex: 0,
        transStart: 0,
        transDiff: 0
      }
    },
    computed: {
      // 列的样式
      rowStyle () {
        return {
          'grid-template-columns': `repeat(${this.rows}, 1fr)`
        }
      },
      // 预览图便宜量
      translateX () {
        return this.previewIndex * window.innerWidth
      }
    },
    methods: {
      // 预览
      preview (index, file) {
        if (file.type === 'img') {
          this.dialogPreview = true
          this.previewIndex = index
        } else {
          window.open(file.url)
        }
      },
      closePreview () {
        this.dialogPreview = false
      },
      // 删除文件
      delFile (index) {
        this.files.splice(index, 1)
      },
      // 获取文件类型
      getFileType (file) {
        return /image/.test(file.type) || /\.(jpe?g|png|gif|bmp)$/i.test(file.name) ? 'img' :
        /\.doc(x|m)?$/i.test(file.name) ? 'doc' :
        /\.xls(x|b|m)?$/i.test(file.name) ? 'xls' :
        /\.ppt(x|m)?$/i.test(file.name) ? 'ppt' :
        /\.pdf$/i.test(file.name) ? 'pdf' : ''
      },
      // 根据文件类型获取预览图
      getFilePreview (file) {
        let previewUrl = {
          img: this.getFileUrl(file),
          doc: require('../../src/assets/images/word.png'),
          xls: require('../../src/assets/images/word.png'),
          ppt: require('../../src/assets/images/word.png'),
          pdf: require('../../src/assets/images/pdf.png')
        }
        return previewUrl[this.getFileType(file)]
      },
      // 获取文件链接
      getFileUrl (file) {
        if (file.url) {
          return file.url
        }
        if (file instanceof File) {
          return window.URL.createObjectURL(file)
        }
        return null
      },
      // 获取文件
      setFiles (e) {
        let files = Array.from(e.target.files)
        let normalFiles = []
        let oversizeFiles = []

        files.forEach(file => {
          if (file.size > this.maxSize) {
            oversizeFiles.push(file)
          } else {
            normalFiles.push(file)
          }
        })

        if (oversizeFiles.length) {
          this.$emit('oversize', oversizeFiles)       // 文件超大事件
        }

        if (normalFiles.length && (!is(this.beforeRead, 'function') || this.beforeRead(normalFiles))) {    // 文件选择前置钩子
          let fileLength = normalFiles.length + this.files.length
          if (fileLength > this.maxCount) {
            this.$emit('exceed', fileLength - this.maxCount)       // 文件数量超出事件
            normalFiles = normalFiles.slice(0, this.maxCount - fileLength)
          }
          this.files = this.files.concat(normalFiles.map(file => {
            return {
              type: this.getFileType(file),
              url: this.getFileUrl(file),
              preview: this.getFilePreview(file),
              file
            }
          }))
          // 文件选择后置钩子
          is(this.afterRead, 'function') && this.afterRead(normalFiles)
        }
      },
      // 预览触摸滚动事件
      touchEvent (e) {
        let list = this.$refs['preview-list']

        switch (e.type) {
          case 'touchstart':
            this.transStart = e.touches[0].clientX
            list.style.transition = list.style.webkitTransition = 'none'
            break;
          case 'touchmove':
            this.transDiff = e.touches[0].clientX - this.transStart
            list.style.transform = list.style.webkitTransform = `translateX(${this.transDiff - this.translateX}px)`
            break;
          case 'touchend':
          case 'touchcancel':
            list.style.transition = list.style.webkitTransition = ''
            if (this.transDiff > 0) {
              this.previewIndex--
            } else {
              this.previewIndex++
            }
            if (this.previewIndex < 0) {
              this.previewIndex = 0
            }
            if (this.previewIndex >= this.files.length) {
              this.previewIndex = this.files.length - 1
            }
            list.style.transform = list.style.webkitTransform = `translateX(${-this.translateX}px)`
            break;
        }
      }
    },
    watch: {
      'files': {
        handler (val) {
          this.$emit('input', val)
          this.$emit('change', val)
        },
        deep: true
      },
      'value': {
        handler (val) {
          if (Array.isArray(val)) {
            val.forEach(file => {
              if (!file.url) {
                file.url = this.getFileUrl(file)
              }
              if (!file.preview) {
                file.preview = this.getFilePreview(file)
              }
              if (!file.type) {
                file.type = this.getFileType(file)
              }
            })
            this.$set(this, 'files', val)
          }
        },
        immediate: true
      }
    }
  }
</script>

<style lang="less" scoped>
  .pl-upload {

    * {
      box-sizing: border-box;
    }
    .rows {
      width: 100%;
      display: grid;
      grid-gap: 1em;

      .cols {
        position: relative;
        height: 0;
        padding-bottom: 100%;

        .pl-file-preview,
        .pl-upload-button {
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }
    }
    .pl-file-preview {
      .pl-upload-img {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        border-radius: 4px;
      }
      .pl-upload-del {
        padding: 1em;
        position: absolute;
        right: 0;
        top: 0;
        transform: translate(50%, -50%);
        color: #ccc;
      }
    }
    .pl-upload-button {

      .file-input {
        position: absolute;
        z-index: 9999;
        -webkit-appearance: none;
        opacity: 0;
        width: 100%;
        height: 100%;
      }
      .pl-add-button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #EBEDFB;
        color: #EBEDFB;
        width: 100%;
        height: 100%;

        .pl-upload-add {
          font-size: 2em;
        }
      }
    }

    .pl-preview-dialog {
      position: fixed;
      z-index: 999;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background: rgba(0, 0, 0, 0.5);

      .preview-list {
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 10;
        list-style: none;
        margin: 0;
        padding: 0;
        transition: all 0.3s ease;

        .preview-item {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          background-position: 50% 50%;
          background-size: contain;
          background-repeat: no-repeat;
        }
      }
      .preview-index {
        position: absolute;
        z-index: 11;
        left: 0;
        top: 1em;
        width: 100%;
        text-align: center;
        color: #fff;
      }
    }
  }
</style>
