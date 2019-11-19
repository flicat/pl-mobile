<template>
  <pl-loading>加载中...</pl-loading>
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
