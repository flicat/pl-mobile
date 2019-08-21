<template>
  <button
    v-bind="$props"
    v-on="$listeners"
    class="pl-button"
    :disabled="disabled"
    :class="[
      type ? 'pl-button--' + type : '',
      size ? 'pl-button--' + size : '',
      {
        'is-disabled': disabled,
        'is-round': round,
        'is-circle': circle
      }
    ]"
  >
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'plButton',
    componentName: 'plButton',
    props: {
      size: {         // 尺寸 可选值：normal，small，lager
        type: String,
        default: 'normal'
      },
      type: {         // 类型 可选值：default，primary，success，warning，danger，text
        type: String,
        default: 'default'
      },
      round: Boolean,         // 是否圆角按钮 boolean
      circle: Boolean,          // 是否圆形按钮 boolean
      disabled: Boolean      // 是否禁用状态 boolean
    }
  }
</script>

<style lang="less" scoped>
  @import "../../src/assets/less/variables.less";
  @import "../../src/assets/less/mixin.less";

  .pl-button {
    border-radius: 3px;
    line-height: normal;
    background: none;
    border: 0 none;
    outline: 0 none;
    text-align: center;
    color: #fff;

    &:active {
      opacity: 0.8;
    }

    &--default {
      background: @default;
    }
    &--primary {
      background: @primary;
    }
    &--success {
      background: @success;
    }
    &--warning {
      background: @warning;
    }
    &--danger {
      background: @danger;
    }
    &--text {
      background: none;
      color: @primary;
    }

    &--normal {
      .font-size(15);
      .padding(9);
    }
    &--small {
      .font-size(12);
      .padding(6);
    }
    &--lager {
      .font-size(18);
      .padding(12, 18);
    }

    > * {
      vertical-align: bottom;
    }
  }

  .is-disabled {
    cursor: not-allowed;
    background-color: @disabled;
  }

  .is-round {
    border-radius: 1em;
  }

  .is-circle {
    border-radius: 50%;
  }
</style>
