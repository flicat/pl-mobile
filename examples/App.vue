<template>
  <div class="wrap">
    <div class="menu">
      <ul class="nav-list">
        <li v-for="router in routes" :key="router.path" >
          <router-link :to="router.path">{{router.meta.title}}</router-link>
        </li>
      </ul>
    </div>
    <div class="docs">
      <router-view name="docs"></router-view>
      <div class="examples">
        <router-view name="examples"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      routes: []
    }
  },
  created () {
    this.routes = this.$router.options.routes.filter(route => route.path !== '/');
  }
}
</script>

<style lang="less">
  @import "./assets/base.less";
  @import "../node_modules/github-markdown-css/github-markdown.css";

  html,body,.wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  body {
    --primary: #5fd3ff;
  }
</style>
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
            color: #418be7;
          }
          /deep/ .router-link-active {
            color: #e7763e;
          }
        }
      }
    }
    .docs {
      &:extend(.wrap .menu);

      /deep/ .markdown-body {
        &:extend(.wrap .menu .nav-list);
      }
    }
  }
</style>
