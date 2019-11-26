<template>
  <div class="content">
    <h4>默认加载的图标库</h4>
    <div class="icons" v-for="name in iconList" :key="name">
      <pl-icon :name="name"/>
      <p>{{name}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        iconList: ['icon-dingwei', 'icon-unlock', 'icon-unlock_fill', 'icon-lock_fill', 'icon-prompt', 'icon-prompt_fill', 'icon-people1', 'icon-people_fill', 'icon-roundleftfill', 'icon-icon_more_down', 'icon-icon_more_up', 'icon-up', 'icon-down', 'icon-jianhao', 'icon-jia', 'icon-time', 'icon-time_fill', 'icon-btn_choose', 'icon-btn_cicle_unchoose', 'icon-icon--1', 'icon-icon--', 'icon-icon_exit', 'icon-icon_name', 'icon-biyan', 'icon-yanjing', 'icon-unfold1', 'icon-packup', 'icon-search', 'icon-return', 'icon-enter', 'icon-roundright', 'icon-roundrightfill', 'icon-roundclose', 'icon-roundclosefill', 'icon-icon_code', 'icon-lock', 'icon-people', 'icon-shexiangtou', 'icon-zhihuan', 'icon-shanchu', 'icon-fabu', 'icon-baocun', 'icon-shuaxin', 'icon-fangkuai-', 'icon-fangkuai', 'icon-kongjianweixuan', 'icon-kongjianxuanzhong', 'icon-shangyibu', 'icon-xiayibu', 'icon-duigou', 'icon-icon_zhanghao', 'icon-icon_rukou', 'icon-icon_loading', 'icon-guanbi', 'icon-jinggao']
      }
    }
  }
</script>

<style lang='less' scoped>
  .icons {
    display: inline-block;
    width: 80px;
    height: 80px;
    margin: 10px;
    text-align: center;
    vertical-align: top;

    .pl-icon {
      font-size: 1.5em;
    }
    p {
      word-break: break-all;
    }
  }
</style>
