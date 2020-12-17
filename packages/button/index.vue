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
        'is-plain': plain,
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
      plain: Boolean,         // 是否空心按钮 boolean
      round: Boolean,         // 是否圆角按钮 boolean
      circle: Boolean,          // 是否圆形按钮 boolean
      disabled: Boolean      // 是否禁用状态 boolean
    }
  }
</script>

<style lang="less" scoped>
  @import "../../src/assets/less/mixin.less";

  .pl-button {
    border-radius: 3px;
    line-height: normal;
    background: none;
    outline: 0 none;
    text-align: center;
    color: var(--button-text-color);
    border: 1px solid;

    &:active {
      opacity: 0.8;
    }

    &--default {
      background: var(--default);
      border-color: var(--default);
    }
    &--primary {
      background: var(--primary);
      border-color: var(--primary);
    }
    &--success {
      background: var(--success);
      border-color: var(--success);
    }
    &--warning {
      background: var(--warning);
      border-color: var(--warning);
    }
    &--danger {
      background: var(--danger);
      border-color: var(--danger);
    }
    &--text {
      background: none;
      border: 0 none;
      color: var(--primary);
    }

    &--normal {
      .font-size(15);
      .padding(8, 12);
    }
    &--small {
      .font-size(12);
      .padding(5, 9);
    }
    &--lager {
      .font-size(18);
      .padding(10, 16);
    }

    > * {
      vertical-align: bottom;
    }
  }

  .is-disabled {
    cursor: not-allowed;
    background-color: var(--disabled);
    border-color: var(--disabled);

    &.pl-button--text {
      background: none;
      color: var(--disabled);
    }
    &.is-plain {
      color: var(--disabled);
    }
  }

  .is-round {
    border-radius: 1em;
  }

  .is-circle {
    border-radius: 50%;
  }

  .is-plain {
    background: transparent;

    &.pl-button {
      &--default {
        color: var(--default);
      }
      &--primary {
        color: var(--primary);
      }
      &--success {
        color: var(--success);
      }
      &--warning {
        color: var(--warning);
      }
      &--danger {
        color: var(--danger);
      }
    }
  }
</style>
