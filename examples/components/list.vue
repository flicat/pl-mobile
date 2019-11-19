<template>
  <div class="content">
    <div class="title">
      <h4>滚动列表</h4><em>下拉刷新</em><em>上拉加载</em>
    </div>
    <div class="list">
      <pl-list class="pl-list" :loading="loading" :finished="finished" @refresh="reload" @load="load">
        <p v-for="item in data" :key="item.value">{{item.label}}</p>
      </pl-list>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        loading: false,
        finished: false,
        data: [
          {label: '选项1', value: 1},
          {label: '选项2', value: 2},
          {label: '选项3', value: 3},
          {label: '选项4', value: 4},
          {label: '选项5', value: 5},
          {label: '选项6', value: 6},
          {label: '选项7', value: 7},
          {label: '选项8', value: 8},
          {label: '选项9', value: 9},
          {label: '选项10', value: 10}
        ]
      }
    },
    methods: {
      reload () {
        this.finished = false

        let result = []
        for (let i = 1; i <= 10; i++) {
          result.push({label: '选项' + i, value: i})
        }
        this.data = result
      },
      load () {
        if (this.data.length < 50) {
          let result = []
          for (let i = this.data.length + 1; i <= this.data.length + 10; i++) {
            result.push({label: '选项' + i, value: i})
          }
          this.data = this.data.concat(result)
        } else {
          this.finished = true
        }
      }
    }

  }
</script>

<style lang="less" scoped>
  .content {
    display: flex;
    flex-direction: column;

    .title {
      background-color: #5fd3ff;
    }
    .list {
      flex: 1;
      position: relative;
      .pl-list {
        position: absolute;
        z-index: 1;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
      }
    }
  }
  p {
    line-height: 3em;
  }
</style>
