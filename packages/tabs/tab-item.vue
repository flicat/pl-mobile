<template>
  <div class="pl-tab-item" :class="{'is-active': active}">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'plTabItem',
    componentName: 'plTabItem',

    props: {
      label: String,
      name: [String, Number],
      disabled: Boolean
    },
    inject: {
      tabs: {
        default: {}
      }
    },
    data () {
      return {

      };
    },

    computed: {
      active () {
        return this.tabs.currentName === this.name;
      }
    },

    mounted () {
      this.tabs.updateItems();
    },

    destroyed () {
      if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
      }
      this.tabs.removeItem(this);
    },

    watch: {
      label () {
        this.tabs.$forceUpdate();
      }
    }
  };
</script>

<style lang="less" scoped>
  .pl-tab-item {
    display: none;
    &.is-active {
      display: block;
    }
  }
</style>
