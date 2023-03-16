<template>
  <div class="content">
    <div class="static-loading">
      <pl-loading>加载中...</pl-loading>
      <pl-loading vertical>加载中...</pl-loading>
    </div>
    <pl-cell :span="[1]" gap="1rem">
      <pl-button type="primary" @click="showLoading">显示全局loading</pl-button>
      <pl-button type="primary" @click="showPartLoading">显示局部loading</pl-button>
      <pl-button type="primary" @click="isShowLoading=!isShowLoading">{{isShowLoading ? '关闭' : '打开'}}loading指令</pl-button>
    </pl-cell>
    <div class="box" ref="loadingBox" v-loading:加载中…="isShowLoading"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShowLoading: false,
    }
  },
  methods: {
    showLoading() {
      let loading = this.$loading({ text: '加载中...' })
      setTimeout(() => {
        loading.close()
      }, 1000)
    },
    showPartLoading() {
      let loading = this.$loading({ text: '加载中...', target: this.$refs.loadingBox })
      setTimeout(() => {
        loading.close()
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  .pl-loading {
    margin: 50px;
  }
  .static-loading {
    --loading-text: #666;
  }
  .box {
    width: 100%;
    height: 10rem;
    margin-top: 1rem;
  }
  /deep/ .pl-loading-wrap {
    position: relative;
  }
}
</style>
