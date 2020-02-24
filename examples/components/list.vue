<template>
  <div class="content">
    <div class="title">
      <h4>滚动列表 <em>下拉刷新</em><em>上拉加载</em></h4>
    </div>
    <div class="list">
      <pl-list class="pl-list" :loading="loading" :finished="finished" @refresh="reload" @load="load" refreshText="松开刷新" loadingText="加载中..." finishedText="加载完成" errorText="加载失败">
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
        page: 1,
        data: []
      }
    },
    created () {
      this.reload()
    },
    methods: {
      reload () {
        this.page = 1

        this.finished = false
        this.loading = true

        this.getData().then(data => {
          this.loading = false
          this.data = data
        })
      },
      load () {
        this.page++

        this.finished = false
        this.loading = true

        this.getData().then(data => {
          this.loading = false
          this.data = this.data.concat(data)
          this.finished = this.data.length >= 30
        })
      },
      getData () {
        return new Promise((resolve, reject) => {
          let result = []
          for (let i = 1; i < 11; i++) {
            let index = i + 10 * (this.page - 1)
            result.push({label: '选项' + index, value: index})
          }
          setTimeout(() => {
            resolve(result)
          }, 500)
        })
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
    }
  }
  p {
    line-height: 3em;
  }
</style>
