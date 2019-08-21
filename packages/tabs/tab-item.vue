<template>
  <div class="pl-tab-item" v-show="active" :class="{'is-active': active}">
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

    data () {
      return {

      };
    },

    computed: {
      active () {
        return this.$parent.currentName === this.name;
      }
    },

    mounted () {
      this.$parent.updateItems();
    },

    destroyed () {
      if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
      }
      this.$parent.removeItem(this);
    },

    watch: {
      label () {
        this.$parent.$forceUpdate();
      }
    }
  };
</script>
