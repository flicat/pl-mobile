<template>
  <div class="content">
    <pl-loading>加载中...</pl-loading>
    <pl-loading vertical>加载中...</pl-loading>
  </div>
</template>
<script>
  export default {
    mounted () {
      this.showLoading()
    },
    methods: {
      showLoading () {
        console.log('loading')
        this.$loadingShow('加载中...')
        setTimeout(() => {
          this.$loadingHide()
        }, 2000)
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
