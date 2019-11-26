<template>
  <div class="wrap">
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
        <iframe :src="'#/examples/' + $route.meta.name" frameborder="0" width="360" height="480"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        routes: []
      }
    },
    created () {
      this.routes = this.$router.options.routes[0].children[0].children.filter(route => route.meta && route.meta.type === 'docs');
    }
  }
</script>

<style lang="less" scoped>
  .wrap {
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
        border: 20px solid #ddd;
        background-color: #fff;
        position: absolute;
        left: 100%;
        top: 0;
        z-index: 10;
        width: 360px;
        height: 480px;
      }
      /deep/ .markdown-body {
        &:extend(.wrap .menu .nav-list);
      }
    }
  }
</style>
