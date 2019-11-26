<template>
  <section>
    <router-view></router-view>
  </section>
</template>

<script>

</script>

<style lang="less" scoped>
  section {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;

    /deep/ .content {
      padding: 1.2em;
      box-sizing: border-box;
    }
  }
</style>
