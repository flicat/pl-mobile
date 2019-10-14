<template>
  <pl-list class="pl-list" :loading="loading" :finished="finished" @refresh="reload" @load="load">
    <p v-for="item in data" :key="item.value">{{item.label}}</p>
  </pl-list>

</template>
<script>
  export default {
    data () {
      return {
        loading: false,
        finished: false,
        data: [
          {label: '选项1', value: 1},
          {label: '选项2', value: 2}
        ]
      }
    },
    methods: {
      reload () {
        this.finished = false
        // load date
      },
      load () {
        // load date
      }
    }

  }
</script>

<style lang="less" scoped>
  .pl-list {
    height: 100%;
  }
</style>
