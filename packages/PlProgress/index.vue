<template>
  <div class="pl-progress" v-bind="$props" v-on="$listeners">
    <div class="progress-inner">
      <div class="progress-track" :style="trackStyle"></div>
    </div>
    <div class="progress-value" :style="textStyle">{{progress}}%</div>
  </div>
</template>

<script>
  // TODO 添加动画支持，环形进度条和饼图
  export default {
    name: 'plProgress',
    componentName: 'plProgress',
    props: {
      fill: {
        type: String,
        default: '#5074FF'
      },
      progress: {
        type: Number,
        default: 0
      }
    },
    computed: {
      trackStyle () {
        return {
          'width': this.progress + '%',
          'background-color': this.fill
        }
      },
      textStyle () {
        return {
          'color': this.fill
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .pl-progress {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    padding: 1em 0;

    * {
      box-sizing: border-box;
    }

    .progress-inner {
      position: relative;
      z-index: 1;
      flex: 1;
      height: 0.4em;
      background: var(--progress-inner);
      border-radius: 0.4em;

      .progress-track {
        position: absolute;
        z-index: 1;
        left: 0;
        top: 0;
        height: 0.4em;
        border-radius: 0.4em;
      }
    }
    .progress-value {
      margin-left: 0.5em;
      font-size: smaller;
    }
  }
</style>
