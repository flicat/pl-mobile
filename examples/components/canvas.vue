<template>
  <div class="content">
    <pl-canvas class="canvas" ref="canvas" :penId="0" orientation="right">
      <span slot="placeholder">请在此处签名</span>
    </pl-canvas>
    <pl-cell :span="[1,2,2]" gap="10px" class="btn-warp">
      <pl-button @click="clear" type="primary">清除</pl-button>
      <pl-button @click="getImageDataUrl" type="primary">获取dataURL</pl-button>
      <pl-button @click="getImageBlob" type="primary">获取BLob</pl-button>
    </pl-cell>
    <div class="preview">
      <img :src="src" v-if="src" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: ''
    }
  },
  methods: {
    clear() {
      this.$refs.canvas.clear()
    },
    getImageDataUrl() {
      let result = this.$refs.canvas.getImageDataUrl()
      console.log('getImageDataUrl:: ', result)
      this.src = result
    },
    getImageBlob() {
      let result = this.$refs.canvas.getImageBlob()
      console.log('getImageBlob:: ', result)
      this.src = URL.createObjectURL(result)
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  .canvas {
    width: 100%;
    height: 80vh;
  }
  .btn-warp {
    padding: 1rem 0;
  }
  .preview {
    padding: 1em;
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
