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
          url: 'logo.png',
          method: 'get',
          type: 'blob'
        }
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
