<template>
  <div class="wrap">
    <ul class="menu">
      <li v-for="router in routes" :key="router.path" >
        <router-link :to="router.path">{{router.name}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
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

<style lang="less" scoped>
  .wrap {
    display: grid;
    grid-template-columns: 200px 1fr;

    .menu {
      padding: 30px;
      margin: 0;
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
</style>
