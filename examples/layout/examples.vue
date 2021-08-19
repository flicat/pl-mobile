<template>
  <section>
    <router-view></router-view>
    <floatMenu :list="list"></floatMenu>
  </section>
</template>

<script>
import floatMenu from './floatMenu.vue'
export default {
  components: {
    floatMenu
  },
  data() {
    return {
      list: this.$router.options.routes[0].children[1].children
    }
  }
}
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
