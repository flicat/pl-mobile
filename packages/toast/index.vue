<template>
  <div class="pl-toast">
    <span v-if="html" v-html="text"></span>
    <span v-else>{{text}}</span>
  </div>
</template>


<script>
  // toast
  export default {
    name: 'plToast',
    componentName: 'plToast',
    props: {
      html: Boolean,          // 是否显示为HTML
      text: String
    }
  }
</script>

<style lang="less" scoped>
  .pl-toast {
    display: table;
    position: fixed;
    z-index: 1000;
    left: 50%;
    top: 65%;
    background-color: rgba(0, 0, 0, 0.5);
    color: var(--toast-text-color);
    border-radius: 3px;
    padding: 0.3em 1em;
    line-height: normal;
    text-align: center;
    max-width: 80%;
    word-break: break-word;
    transform: translate(-50%, -50%);
    span {
      font: inherit;
    }
  }
</style>
