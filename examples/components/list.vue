<template>
  <div class="content">
    <div class="title">
      <h4>滚动列表<small>上拉加载</small><small>下拉刷新</small></h4>
    </div>
    <div class="list">
      <pl-list class="pl-list" :autoLoad="100" :loading="loading" :finished="finished" @refresh="reload" @load="load" refreshText="松开刷新" loadingText="加载中..." finishedText="加载完成">
        <div v-for="item in data" :key="item.value" class="card-item">
          <p>这是标题{{item.label}}</p>
          <p>这是选项卡副标题</p>
          <p>这是选项卡内容，this is content.</p>
        </div>
        <!-- <template v-slot:top-loading>努力重刷中...</template>
        <template v-slot:top-refresh>放开重刷</template>
        <template v-slot:bottom-loading>努力加载中...</template>
        <template v-slot:bottom-finished>全部加载完啦</template> -->
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
  .title h4 {
    color: #333;
    font-size: 1.2rem;
    margin: 0;
    line-height: normal;
    padding-bottom: 1em;
    small {
      margin-left: 1em;
      color: #666;
    }
  }
  .list {
    flex: 1;
  }
  .card-item {
    border: 1px solid #aaa;
    border-radius: 0.3rem;
    background-color: #fafafa;
    padding: 1rem;
    margin-bottom: 1rem;
    p {
      margin: 0;
      &:nth-child(1) {
        font-weight: 700;
        font-size: 1.5rem;
      }
      &:nth-child(2) {
        line-height: 1.5em;
      }
      &:nth-child(3) {
        font-style: italic;
        color: #666;
      }
    }
  }
}
</style>
