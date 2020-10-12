<template>
  <i
    class="pl-icon"
    v-on="$listeners"
    :style="style">
    <svg
      v-if="name && !src"
      class="icon-svg"
      aria-hidden="true">
      <use
        :fill="fill"
        :stroke="stroke"
        :xlink:href="'#' + name"></use>
    </svg>
  </i>
</template>

<script>
  import './iconfont.js'

  export default {
    name: 'plIcon',
    componentName: 'plIcon',

    props: {
      name: {         // iconfont name
        type: String,
        default: ''
      },
      src: {         // 图标链接
        type: String,
        default: ''
      },
      fill: String,       // svg 填充颜色
      stroke: String        // svg 描边颜色
    },
    computed: {
      style () {
        if (this.src) {
          return {
            backgroundImage: 'url(' + this.src + ')'
          }
        } else {
          return null
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .pl-icon {
    width: 1.2em;
    height: 1.2em;
    display: inline-block;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: contain;
    vertical-align: middle;
    line-height: 0;

    * {
      box-sizing: border-box;
    }

    .icon-svg {
      width: 100%;
      height: 100%;
      fill: currentColor;
      overflow: hidden;
      vertical-align: top;
    }
  }
</style>
