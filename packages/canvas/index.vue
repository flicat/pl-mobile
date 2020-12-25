<template>
  <div class="pl-canvas" ref="wrap">
    <canvas ref="canvas"
      v-bind="$attrs"
      @touchstart="handlerStart"
      @touchmove="handlerMove"
      @touchend="handlerEnd"
      @touchcancel="handlerEnd"></canvas>
    <div class="placeholder" v-show="showPlaceholder" :style="placeholderStyle">
      <slot name="placeholder"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'plCanvas',
    componentName: 'plCanvas',
    props: {
      size: {        // 笔触大小
        type: Number,
        default: 14
      },
      orientation: {  // 画布朝向 top/right/bottom/left
        type: String,
        default: 'top'
      },
      penId: {        // 笔触id
        type: Number,
        default: 0
      },
      fillStyle: {        // 笔触id
        type: String
      }
    },
    data () {
      return {
        penSize: this.size,  // 笔刷大小
        pointArr: [],        // 描绘点
        writeFlag: false,    // 是否开始写字
        startPoint: {},      // 笔触开始坐标点
        canvas: null,        // canvas
        context2D: null,     // canvas context
        clientRect: null,     // canvas 坐标偏移量
        showPlaceholder: true     // 显示 placeholder
      }
    },
    computed: {
      // 画笔列表
      penImgList () {
        return [
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABLUExURUxpcQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADFVjQ0AAAAYdFJOUwDNi6oneUH3CrblTzCSHsfYOlpfvphlGd7l5lMAAACySURBVCjPjZNZEsMgDEMhgZgQsi/1/U/a6UAJi51Wv28QwhZC/NAyt3pzhsMSPwJ57hOFW4xaxq7CDaayo8rxhoX6zMJhpT5xMFBz0GX00iC+9KQwzobL5nUE/KIxfu9faAwTNZhbo8crg21wtwx3z+6Dx4rBV3DvabyLx3BxdeRxiHNXQK3lXpvmg5eVC5Jpacxc3pyXzuTxYCg7q5N8h6orPzV++tB2zJ9xw7WvRvypNzPMLyiDuR4wAAAAAElFTkSuQmCC',
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURUxpcQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD94JoQAAAAcdFJOUwDlxND2AxkS7/snrnEKYoWXOC7cTkIfkaeLU7nauEdWAAAAyklEQVQoz72Txw7DIBBEl2IWA6a4F/7/OxORKI4LnKKMuD20DMwA8CdVAE0GoWptb6xZ+wEQqwNr0HjWySifq5PMT2ur9h3CUhkP4lR726aTquBlHS/ihDobAAK9gUl1R0HMsSAwvIhpiRIgBcoXqAtYt1Cg8nmvPO0cFDBxooTdCHnMNaY8Ms4n9YpL3nrW4p3mxO9cqU/Y+jKeGNyrEthpMBsOjcP5+93ZMp4KqsyWDNaRsGWoLjVtVO/pvGlnBWYajqNo8Mcf5wEUtTUhHrorsgAAAABJRU5ErkJggg=='
        ].map(src => {
          let img = new Image()
          img.src = src
          return img
        })
      },
      // 笔刷
      penImg () {
        return this.penImgList[this.penId] || this.penImgList[0]
      },
      // 旋转角度
      rotate () {
        return {
          top: 0,
          right: 90,
          bottom: 180,
          left: 270
        }[this.orientation]
      },
      placeholderStyle () {
        let style = {
          transform: 'translate(-50%, -50%) rotate(' + this.rotate + 'deg)',
          webkitTransform: 'translate(-50%, -50%) rotate(' + this.rotate + 'deg)'
        }
        if (this.canvas && /^(left|right)$/.test(this.orientation)) {
          style.width = this.canvas.height + 'px'
          style.height = this.canvas.width + 'px'
        }
        return style
      }
    },
    mounted () {
      this.canvas = this.$refs.canvas
      this.canvas.width = this.$refs.wrap.clientWidth
      this.canvas.height = this.$refs.wrap.clientHeight
      this.context2D = this.canvas.getContext('2d')
      this.clear()
    },
    methods: {
      handlerStart (e) {
        this.writeFlag = true
        this.clientRect = this.canvas.getBoundingClientRect()
        this.startPoint = this.getPointPosition(e)
        let x1 = this.startPoint.x
        let y1 = this.startPoint.y
        this.pointArr.unshift({x1, y1})
        this.showPlaceholder = false
        this.$emit('drawStart')
      },
      handlerMove (e) {
        if (!this.writeFlag) {
          return false
        }
        e.preventDefault()
        let currentPoint = this.getPointPosition(e) //move
        let startPoint = this.startPoint  //down
        this.startPoint = currentPoint

        let len = Math.round(this.distance(startPoint, currentPoint) / 2) + 1
        for (let i = 0; i < len; i++) {
          let x = startPoint.x + (currentPoint.x - startPoint.x) / len * i - this.penSize / 2
          let y = startPoint.y + (currentPoint.y - startPoint.y) / len * i - this.penSize / 2

          this.context2D.beginPath()

          this.pointArr.unshift({x, y})
          this.context2D.drawImage(this.penImg, x, y, this.penSize, this.penSize)
          this.penSize = this.penSize - 0.2
          if (this.penSize < this.size / 2) {
            this.penSize = Math.ceil(this.size / 2)
          }
        }
        this.$emit('drawing')
      },
      handlerEnd () {
        this.writeFlag = false
        this.penSize = this.size
        if (this.pointArr.length > 100) {
          for (let i = 0; i < 60; i++) {
            this.pointArr[i].x = this.pointArr[i].x - this.penSize / 4
            this.pointArr[i].y = this.pointArr[i].y - this.penSize / 4
            this.context2D.drawImage(this.penImg, this.pointArr[i].x, this.pointArr[i].y, this.penSize, this.penSize)

            this.penSize = this.penSize - 0.3
            if (this.penSize < this.size / 4) {
              this.penSize = Math.ceil(this.size / 4)
            }
          }
          this.penSize = this.size
          this.pointArr.length = 0
        }
        if (this.pointArr.length === 1) {
          this.context2D.drawImage(this.penImg, this.pointArr[0].x1 - this.penSize / 2, this.pointArr[0].y1 - this.penSize / 2, this.penSize, this.penSize)
          this.pointArr.length = 0
        }
        this.$emit('drawEnd')
      },
      // 获取笔触坐标点
      getPointPosition (e) {
        let x = e.clientX || e.touches[0].clientX
        let y = e.clientY || e.touches[0].clientY
        return {
          x: x - this.clientRect.left,
          y: y - this.clientRect.top
        }
      },
      // 计算两个笔触之间的距离
      distance (startPoint, currentPoint) {
        let x = currentPoint.x - startPoint.x
        let y = currentPoint.y - startPoint.y
        return Math.sqrt(x * x + y * y)
      },
      // 清除画布
      clear () {
        this.context2D.clearRect(0, 0, this.canvas.width, this.canvas.height)
        if (this.fillStyle) {
          this.context2D.fillStyle = this.fillStyle
          this.context2D.fillRect(0, 0, this.canvas.width, this.canvas.height)
        }
        this.showPlaceholder = true
        this.$emit('clear')
      },
      // dataURL 转 Blob
      dataURLtoBlob (dataUrl) {
        let arr = dataUrl.split(','), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n)
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n)
        }
        return new Blob([u8arr], {type: mime})
      },
      // 根据方向旋转图片
      setImgOrientation () {
        if (this.orientation === 'top') {
          return this.canvas
        }

        let canvas = document.createElement('canvas')

        if (/^(left|right)$/.test(this.orientation)) {
          canvas.width = this.canvas.height
          canvas.height = this.canvas.width
        } else {
          canvas.width = this.canvas.width
          canvas.height = this.canvas.height
        }

        let context = canvas.getContext('2d')
        let drawX = ({right: 0, bottom: canvas.width, left: canvas.width})[this.orientation]
        let drawY = ({right: canvas.height, bottom: canvas.height, left: 0})[this.orientation]

        context.translate(drawX, drawY)
        context.rotate(-this.rotate * Math.PI / 180)
        context.drawImage(this.canvas, 0, 0)
        return canvas
      },
      // 获取图像
      getImageDataUrl (type, encoderOptions) {
        return this.setImgOrientation().toDataURL(type, encoderOptions)
      },
      // 获取图像
      getImageBlob (type, encoderOptions) {
        return this.dataURLtoBlob(this.getImageDataUrl(type, encoderOptions))
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../src/assets/less/mixin.less";

  .pl-canvas {
    position: relative;
    z-index: 0;
    width: 100%;
    .height(375);
    background-color: var(--canvas-bg);

    canvas {
      position: relative;
      z-index: 1;
    }
    .placeholder {
      position: absolute;
      z-index: 0;
      left: 50%;
      top: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 1.5em;
      transform-origin: 50% 50%;
      color: var(--canvas-placeholder);
      font-size: 4em;
      text-align: center;
    }

  }
</style>
