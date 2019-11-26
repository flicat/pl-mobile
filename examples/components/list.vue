<template>
  <div class="content">
    <div class="title">
      <h4>滚动列表 <em>下拉刷新</em><em>上拉加载</em></h4>
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
        data: []
      }
    },
    created () {
      this.reload()
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
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

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
