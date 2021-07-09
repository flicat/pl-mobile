<template>
  <div class="pl-progress" v-bind="$props" v-on="$listeners">
    <svg class="progress-circle" viewBox="0 0 100 100" v-if="type==='circle'">
      <text class="progress-value" x="50" y="57">{{value}}%</text>
      <circle cx="50" cy="50" r="45" :class="['progress-track', value >= 100 ? 'full' : '']" transform="rotate(-90 50 50)" :stroke-dashoffset="280 - value * 2.8"></circle>
    </svg>
    <div class="progress-bar" v-else>
      <div class="progress-inner">
        <div class="progress-track" :style="{'--track-width': value + '%'}"></div>
      </div>
      <div class="progress-value">
        <span class="value">{{value}}%</span>
        <span class="placeholder">{{finalValue}}%</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'plProgress',
  componentName: 'plProgress',
  props: {
    progress: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: 'bar'
    }
  },
  data() {
    return {
      value: 0,
      finalValue: 0
    }
  },
  computed: {
    trackStyle() {
      return {
        'width': this.progress + '%'
      }
    }
  },
  mounted() {
    this.animate()
  },
  methods: {
    async animate() {
      let progress = Number(this.progress)
      if (!progress || progress < 0) {
        progress = 0
      }
      if (progress > 100) {
        progress = 100
      }
      this.finalValue = progress

      let step = Math.round((progress - this.value) / 20)
      while (Math.abs(progress - this.value) > Math.abs(step)) {
        await new Promise(resolve => {
          this.value += step
          requestAnimationFrame(resolve)
        })
      }
      if (this.value != this.finalValue) {
        this.value = this.finalValue
      }
    }
  },
  watch: {
    progress() {
      this.animate()
    }
  }
}
</script>

<style lang="less" scoped>
.pl-progress {
  padding: 1em 0;

  * {
    box-sizing: border-box;
  }
  .progress-bar {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    .progress-inner {
      position: relative;
      z-index: 1;
      flex: 1;
      height: 0.4em;
      background: var(--progress-inner);
      border-radius: 0.2em;

      .progress-track {
        position: absolute;
        z-index: 1;
        left: 0;
        top: 0;
        width: var(--track-width);
        height: 0.4em;
        border-radius: 0.2em;
        background-color: var(--progress-bar);
      }
    }
    .progress-value {
      position: relative;
      margin-left: 0.5em;
      font-size: smaller;
      color: var(--progress-text);
      .value {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
      }
      .placeholder {
        opacity: 0;
      }
    }
  }

  // svg
  .progress-circle {
    width: 100%;
    .progress-track {
      fill: none;
      stroke: var(--progress-bar);
      stroke-width: 0.2em;
      stroke-dasharray: 280;
      stroke-linecap: round;
      stroke-linejoin: round;
      &.full {
        stroke-linecap: square;
        stroke-linejoin: square;
      }
    }
    .progress-value {
      text-anchor: middle;
      stroke: none;
      fill: var(--progress-text);
      font-size: 20px;
      font-size-adjust: 0.5;
    }
  }
}
</style>
