<template>
  <div class="pl-upload">
    <div class="rows" :style="rowStyle">
      <div class="cols" v-for="(file, i) in files" :key="i">
        <div class="pl-file-preview">
          <div class="pl-upload-img" :class="[file.type]" :style="file.preview ? {'background-image': `url(${file.preview})`} : null" @click="preview(file)"></div>
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
          v-for="(file, i) in previewList"
          :key="i"
          :style="{'background-image': `url(${file.preview})`, 'left': i * 100 + '%'}"
        ></li>
      </ul>
      <div class="preview-index">{{previewIndex + 1}}/{{previewList.length}}</div>
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
    model: {
      event: '-pl-change'
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
        files: [],            // 文件列表
        previewList: [],   // 图片预览列表

        dialogPreview: false,  // 预览弹窗
        previewIndex: 0,        // 预览index
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
      preview (file) {
        if (file.type === 'image') {
          this.previewList = this.files.filter(item => item.type === 'image')
          this.previewIndex = this.previewList.findIndex(item => item === file)
          this.dialogPreview = true
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
        return /image/.test(file.type) || /\.(jpe?g|png|gif|bmp)$/i.test(file.name) ? 'image' :
        /\.doc(x|m)?$/i.test(file.name) ? 'doc' :
        /\.xls(x|b|m)?$/i.test(file.name) ? 'xls' :
        /\.ppt(x|m)?$/i.test(file.name) ? 'ppt' :
        /\.pdf$/i.test(file.name) ? 'pdf' : ''
      },
      // 根据文件类型获取预览图
      getFilePreview (file) {
        if (this.getFileType(file) === 'image') {
          return this.getFileUrl(file)
        } else {
          return null
        }
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

        let beforeResult = true
        if (is(this.beforeRead, 'function')) {
          // 文件选择前置钩子，返回false则取消添加文件
          beforeResult = this.beforeRead(normalFiles) !== false
        }

        if (normalFiles.length && beforeResult) {

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

          this.$emit('-pl-change', this.files)
          this.$emit('change', this.files)
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
            if (this.previewIndex >= this.previewList.length) {
              this.previewIndex = this.previewList.length - 1
            }
            list.style.transform = list.style.webkitTransform = `translateX(${-this.translateX}px)`
            break;
        }
      }
    },
    watch: {
      'value': {
        handler (val) {
          if (Array.isArray(val)) {
            val.forEach(file => {
              if (!file.url) {
                file.url = this.getFileUrl(file)
              }
              if (!file.type) {
                file.type = this.getFileType(file)
              }
              if (file.type === 'image' && !file.preview) {
                file.preview = this.getFilePreview(file)
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
        background-image: url(../../src/assets/images/word.png);

        &.pdf {
          background-image: url(../../src/assets/images/pdf.png);
        }
      }
      .pl-upload-del {
        padding: 1em;
        position: absolute;
        right: 0;
        top: 0;
        transform: translate(50%, -50%);
        color: var(--upload-del-text);
      }
    }
    .pl-upload-button {

      .file-input {
        position: absolute;
        z-index: 1;
        -webkit-appearance: none;
        opacity: 0;
        width: 100%;
        height: 100%;
      }
      .pl-add-button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--upload-add-button);
        color: var(--upload-add-button);
        width: 100%;
        height: 100%;

        .pl-upload-add {
          font-size: 2em;
        }
      }
    }

    .pl-preview-dialog {
      position: fixed;
      z-index: 99;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background: rgba(0, 0, 0, 0.5);

      .preview-list {
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 1;
        list-style: none;
        margin: 0;
        padding: 0;
        transition: all 0.3s ease;
        will-change: transform, -webkit-transform;

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
        z-index: 2;
        left: 0;
        top: 1em;
        width: 100%;
        text-align: center;
        color: #fff;
        text-shadow: 0 0 2px #999;
      }
    }
  }
</style>
