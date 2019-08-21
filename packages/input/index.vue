<template>
  <div class="pl-input" :class="[
    size ? 'pl-input--' + size : '',
    {
      'is-disabled': disabled,
      'pl-input-group': $slots.prepend || $slots.append,
      'pl-input-group--append': $slots.append,
      'pl-input-group--prepend': $slots.prepend,
      'pl-input--error': ruleMessage
    }
    ]">
    <div class="pl-input-cell">
      <div :class="[
        type === 'textarea' ? 'pl-textarea-label' : 'pl-input-label',
        {'pl-input-label--require': required}
        ]"
        v-if="label" :style="{width: labelWidth}">
        <slot name="label">{{label}}</slot>
      </div>
      <template v-if="type !== 'textarea'">
        <div class="pl-input-prepend" v-if="$slots.prepend">
          <slot name="prepend"></slot>
        </div>
        <div class="pl-input-inner">
          <input
            v-bind="$attrs"
            v-on="{...$listeners, input: emit, focus: emit, blur: emit}"
            v-if="type !== 'textarea'"
            :type="type"
            :disabled="disabled"
            :value="currentValue"
            ref="input">
        </div>
        <div class="pl-input-clear" @touchstart="clear" @mousedown="clear">
          <icon name="icon-roundclosefill" fill="#ccc" v-if="showClear"></icon>
        </div>
        <div class="pl-input-append" v-if="$slots.append">
          <slot name="append"></slot>
        </div>
      </template>
      <div class="pl-input-inner" v-else>
      <textarea
        v-bind="$attrs"
        :rows="rows"
        :cols="cols"
        v-on="{...$listeners, input: emit, focus: emit, blur: emit}"
        :value="currentValue"
        ref="input"
        :disabled="disabled"></textarea>
      </div>
    </div>
    <div class="pl-input-error" v-if="ruleMessage">{{ruleMessage}}</div>
  </div>
</template>

<script>
  import icon from '../icon/index.vue'
  import {validate} from '../../src/assets/utils'

  export default {
    name: 'plInput',
    componentName: 'plInput',
    components: {
      icon
    },
    props: {
      rules: {          // 验证规则
        type: Array,
        default () {
          return []
        }
      },
      size: {         // 尺寸 可选值为 normal，large, small
        type: String,
        default: 'normal'
      },
      type: {         // 表单类型，原生字段
        type: String,
        default: 'text'
      },
      value: [String, Number],
      disabled: Boolean,        // 禁用
      required: Boolean,        // 必填 *号
      rows: String,            // 左侧 label
      cols: String,            // 左侧 label
      label: String,            // 左侧 label
      labelWidth: String,       // label 宽度
      clearable: {              // 清除按钮
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        currentValue: this.value === undefined ? '' : this.value,
        focused: false,
        ruleMessage: '',     // 验证错误提示信息
        handlers: []
      }
    },
    computed: {
      showClear () {
        return this.clearable && !this.disabled && this.currentValue !== '' && this.focused
      }
    },
    mounted () {
      this.bindEvent()
    },
    methods: {
      // 手动验证方法
      validate () {
        return Promise.all(this.rules.map(rule => validate(rule, this.value))).then(() => {
          this.ruleMessage = ''
          return Promise.resolve()
        }).catch(e => {
          this.ruleMessage = e
          return Promise.reject(e)
        })
      },
      focus () {
        this.$refs.input.focus();
      },
      blur () {
        this.$refs.input.blur();
      },
      setCurrentValue (value) {
        if (value === this.currentValue) {
          return false
        }
        this.currentValue = value
      },
      clear () {
        this.$emit('input', '')
        this.$emit('change', '')
        this.$emit('clear')
        this.setCurrentValue('')
        this.focus()
      },
      emit (e) {
        const value = e.target.value
        const type = e.type

        if (type === 'input') {
          this.setCurrentValue(value)
        }
        if (type === 'focus') {
          this.focused = true
        }
        if (type === 'blur') {
          this.focused = false
        }
        this.$emit(type, value)
      },
      bindEvent () {
        // 绑定事件
        this.rules.forEach(rule => {
          let event = rule.trigger
          if (!event) {
            event = 'change'
          }

          let handler = () => {
            validate(rule, this.value).then(() => {
              this.ruleMessage = ''
            }).catch(e => {
              this.ruleMessage = e
            })
          }

          this.$refs.input.addEventListener(event, handler)
          this.handlers.push({event, handler})
        })
      },
      unbindEvent () {
        this.handlers.forEach(handler => {
          this.$refs.input.removeEventListener(handler.event, handler.handler)
        })
        this.handlers.length = 0
      },
    },
    watch: {
      'value' (val) {
        this.setCurrentValue(val)
      },
      'rules' (val) {
        if (Array.isArray(val)) {
          this.unbindEvent()
          this.bindEvent()
        }
      }
    },
    beforeDestroy () {
      this.unbindEvent()
    }
  }
</script>

<style lang="less">
  @import "../../src/assets/less/variables.less";

  .pl-input {
    background-color: #fff;
    padding: 0 1.2em;
    line-height: normal;

    &-cell {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
    }

    &--large {
      font-size: 1.2em;
    }
    &--small {
      font-size: 0.8em;
    }
    &--normal {

    }
    &--error {
      position: relative;
    }
    &-inner {
      padding: 1em 0;
      flex: 1;
    }
    .pl-input-label,
    .pl-textarea-label {
      padding-right: 0.4em;

      &--require {
        position: relative;
        &::before {
          position: absolute;
          content: '*';
          color: @danger;
          left: -0.6em;
          top: 30%;
        }
      }
    }
    .pl-textarea-label {
      align-self: flex-start;
      margin-top: 1em;
    }
    &-append,
    &-prepend {
      text-align: center;
    }
    &-append {
      padding-left: 0.4em;
    }
    &-prepend {
      padding-right: 0.4em;
    }
    &-clear {
      padding: 0 0.4em;

      .icon-clear {
        width: 1.2em;
        height: 1.2em;
        vertical-align: bottom;
      }
    }
    &-error {
      padding: 0 0.5em;
      color: @danger;
      line-height: 2em;
    }

    input,
    textarea {
      border: 0 none;
      margin: 0;
      padding: 0;
      line-height: normal;
      width: 100%;
      background-color: transparent;

      &::placeholder {
        color: @primary-text;
      }
    }

    &.is-disabled {
      background-color: @disabled;
    }
  }
</style>
