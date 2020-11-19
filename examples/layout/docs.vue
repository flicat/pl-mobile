<template>
  <section class="wrap">
    <div class="menu">
      <ul class="nav-list">
        <li v-for="router in routes" :key="router.path" >
          <router-link :to="router.path">{{router.meta.title}}</router-link>
        </li>
      </ul>
    </div>
    <div class="docs" :class="{'has-examples': $route.meta.name}">
      <router-view></router-view>
      <div class="examples" v-if="$route.meta.name">
        <div class="mobile">
          <iframe :src="'#/examples/' + $route.meta.name" frameborder="0" width="360" height="480"></iframe>
        </div>
        <div class="qrcode">
          <qrCode :value="QRCodeValue" :size="200"/>
          <p>手机扫码查看</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import qrCode from './qrcode'

  export default {
    components: {
      qrCode
    },
    data () {
      return {
        routes: [],
        QRCodeValue: null
      }
    },
    created () {
      this.routes = this.$router.options.routes[0].children[0].children.filter(route => route.meta && route.meta.type === 'docs');
    },
    watch: {
      '$route.meta.name': {
        handler (val) {
          this.QRCodeValue = window.location.href.split('#')[0] + '#/examples/' + val

        },
        immediate: true
      }
    }
  }
</script>

<style lang="less" scoped>
  .wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: grid;
    grid-template-columns: 260px 1fr;
    grid-template-rows: 1fr;
    grid-gap: 15px;

    .menu {
      height: 100%;
      position: relative;

      .nav-list {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        overflow: auto;
        padding: 30px;
        margin: 0;
      }

      .nav-list {
        border-right: 1px solid #BEC5CB;

        li {
          border-bottom: 1px solid #ccd3d9;
          line-height: 2em;

          a {
            text-decoration: none;
            text-transform: capitalize;
            color: #333;
          }
          /deep/ .router-link-active {
            color: #4f95ff;
          }
        }
      }
    }
    .docs {
      &:extend(.wrap .menu);
      &.has-examples {
        border-right: 400px solid #ddd;
        position: relative;
      }

      .examples {
        position: absolute;
        left: 100%;
        top: 0;
        bottom: 0;
        z-index: 10;
        overflow-x: hidden;
        overflow-y: auto;

        .mobile {
          border: 20px solid #ddd;
          background-color: #fff;
          width: 360px;
          height: 480px;
        }
        .qrcode {
          width: 200px;
          padding: 10px;
          margin: 10px auto;
          text-align: center;
          background-color: #fff;

          p {
            font: 400 14px/1em '微软雅黑';
            color: #999;
            margin: 0;
          }
        }
      }
      /deep/ .markdown-body {
        &:extend(.wrap .menu .nav-list);
      }
    }
  }
</style>
