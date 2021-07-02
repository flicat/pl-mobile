<template>
  <div class="content">
    <div class="title">
      <h4>滚动列表 <em>下拉刷新</em><em>上拉加载</em></h4>
    </div>
    <div class="list">
      <pl-list class="pl-list" :autoLoad="100" :loading="loading" :finished="finished" @refresh="reload" @load="load" refreshText="松开刷新" loadingText="加载中..." finishedText="加载完成" errorText="加载失败">
        <p v-for="item in data" :key="item.value">{{item.label}}</p>
        <!--<span slot="top-loading">努力重刷中...</span>-->
        <!--<span slot="top-refresh">放开重刷</span>-->
        <!--<span slot="bottom-loading">努力加载中...</span>-->
        <!--<span slot="bottom-finished">全部加载完啦</span>-->
      </pl-list>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      finished: false,
      page: 1,
      size: 10,
      data: [],
      totalSize: 50
    }
  },
  created() {
    this.reload()
  },
  methods: {
    reload() {
      this.page = 1
      this.finished = false
      this.getData()
    },
    load() {
      if (this.finished) {
        return false
      }

      this.page++
      this.getData()
    },
    async getData() {
      this.loading = true

      let data = await new Promise((resolve, reject) => {
        let result = []
        for (let i = 1; i <= this.size; i++) {
          let index = i + this.size * (this.page - 1)
          result.push({ label: '选项' + index, value: index })
        }
        setTimeout(() => {
          resolve(result)
        }, 1000)
      })

      if (this.page === 1) {
        this.data = data
      } else {
        this.data = this.data.concat(data)
      }
      this.finished = this.data.length >= this.totalSize

      this.loading = false
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
