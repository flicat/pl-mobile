<template>
  <div class="pl-loading" v-bind="$props" :class="[vertical ? 'pl-loading-vertical' : 'pl-loading-horizontal']">
    <div class="loading-icon"><svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
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
      </svg></div>
    <div class="loading-text"><slot></slot></div>
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
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--loading-text);

    * {
      box-sizing: border-box;
    }
    &-vertical {
      flex-direction: column;
      .loading-icon {
        margin: auto;

        svg {
          width: 3em;
          height: 3em;
        }
      }
    }
    &-horizontal {
      .loading-icon {
        width: 1em;
        height: 1em;
        margin-right: 0.5em;

        svg {
          width: 1em;
          height: 1em;
        }
      }
    }
    .loading-icon {
      svg {
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
