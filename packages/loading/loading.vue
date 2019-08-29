<template>
  <div class="pl-loading" :class="[vertical ? 'pl-loading-vertical' : 'pl-loading-horizontal']">
    <div class="loading-icon">
      <svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">
          <g transform="translate(1 1)" stroke-width="2">
            <circle stroke-opacity=".5" cx="18" cy="18" r="18"/>
            <path d="M36 18c0-9.94-8.06-18-18-18">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="1s"
                repeatCount="indefinite"/>
            </path>
          </g>
        </g>
      </svg>
    </div>
    <span class="loading-text"><slot></slot></span>
  </div>
</template>

<script>
  // loading
  export default {
    name: 'plLoading',
    componentName: 'plLoading',
    props: {
      vertical: Boolean
    }
  }
</script>

<style lang="less" scoped>
  .pl-loading {
    text-align: center;
    color: #999;

    * {
      box-sizing: border-box;
    }

    &-vertical {
      .loading-icon {
        display: block;
        margin: auto;

        svg {
          width: 3em;
          height: 3em;
        }
      }
    }
    &-horizontal {
      .loading-icon {
        display: inline-block;
        margin-right: 0.5em;

        svg {
          width: 1em;
          height: 1em;
        }
      }
    }
    .loading-icon {
      svg {
        vertical-align: middle;
        stroke: currentColor;
        fill: none;
      }
    }
    .loading-text {
      color: currentColor;
      line-height: 2em;
    }
  }
</style>
