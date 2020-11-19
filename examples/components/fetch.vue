<template>
  <div class="content">
    <pl-button @click="getImg" type="primary">请求一张图片</pl-button>
    <img :src="src" v-if="src" ref="img">
  </div>
</template>
<script>
  export default {
    data () {
      return {
        src: ''
      }
    },
    created () {
      this.$fetchConfig({
        headers: {
          'Accept': 'application/json, text/plain, */*'
        },
        baseUrl: location.origin,
      });
      this.$fetchDefine({
        getImg: {
          baseUrl: window.location.href.split('#')[0],
          url: '/logo.png',
          method: 'get',
          type: 'blob'
        }
      });
      this.$fetchMiddleware(function (res) {
        console.log('Middleware1::', res)
        res.then(data => {
          if (data && data.code === 401) {
            console.log('Your parameters may be incorrect')
          }
        }).catch(e => {
          console.log('network error')
        })
      })
      this.$fetchMiddleware(function (res) {
        res.then(data => {
          console.log('Middleware2::', data)
        })
      })
    },
    methods: {
      getImg () {
        this.$fetch.getImg({
          _: Date.now()
        }).then(data => {
          if (data && data.size > 0) {
            this.src = URL.createObjectURL(data)
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  img {
    display: block;
    width: 50vw;
  }
</style>
