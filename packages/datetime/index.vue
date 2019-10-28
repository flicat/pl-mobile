<template>
  <div class="pl-datetime" v-on="$listeners" :class="[
    calcSize ? 'pl-datetime--' + calcSize : '',
    {
      'is-disabled': calcDisabled,
      'pl-datetime--error': ruleMessage
    }
    ]">
    <div class="pl-datetime-cell">
      <div class="pl-datetime-label" :class="{'pl-datetime-label--require': required}" v-if="label" :style="{width: calcLabelWidth}">
        <slot name="label">{{label}}</slot>
      </div>
      <div class="pl-datetime-prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </div>
      <div class="pl-datetime-inner" @click="open">
        <span v-if="currentItem || currentValue" class="title">{{valueTitle}}</span>
        <span class="placeholder" v-else>{{placeholder}}</span>
      </div>
      <div class="pl-datetime-clear" @touchstart.stop.prevent="clear" @mousedown.stop.prevent="clear">
        <icon name="icon-roundclosefill" fill="#ccc" v-if="showClear"></icon>
      </div>
      <div class="pl-datetime-append" v-if="$slots.append">
        <slot name="append"></slot>
      </div>
    </div>

    <picker :options="getPickerOption()" :defaultValue="[currentValue]" :title="placeholder" :prop="prop" @submit="submit" @cancel="cancel" ref="picker">
      <template v-slot="scope">
        <slot :item="scope.item"></slot>
      </template>
    </picker>
  </div>
</template>

<script>
  // TODO datetime
  import picker from '../picker/index.vue'
  import icon from '../icon/index.vue'
  import {is, validate, getDateString, getDateFromString} from '../../src/assets/utils'

  export default {
    name: 'plDatetime',
    componentName: 'plDatetime',
    components: {
      picker,
      icon
    },
    props: {
      rules: {          // 验证规则
        type: Array,
        default () {
          return []
        }
      },
      value: {
        default: ''
      },
      size: String,     // 尺寸 可选值为 normal，large, small,
      placeholder: {
        type: String,
        default: '请选择'
      },
      type: {           // 日历类型：month，date，time，monthrange，daterange，timerange
        type: String,
        default: 'date'
      },
      format: String,          // 日期格式，Y-M-D H:I:S 不传则返回日期对象
      disabled: Boolean,        // 禁用
      readonly: Boolean,        // 只读
      required: Boolean,        // 必填 *号
      label: String,            // 左侧 label
      labelWidth: String,       // label 宽度
      clearable: {              // 清除按钮
        type: Boolean,
        default: false
      }
    },
    inject: {
      form: {
        default: null
      }
    },
    data () {
      return {
        currentValue: this.value === undefined ? '' : this.value,
        ruleMessage: '',
        handlers: []
      }
    },
    computed: {
      valueTitle () {
        if (this.format) {
          return getDateString(this.currentValue, this.format)
        } else {
          return getDateFromString(this.currentValue)
        }
      },
      showClear () {
        return this.clearable && !this.calcDisabled && this.currentValue
      },
      calcSize () {
        return this.size || this.form && this.form.size || 'normal'
      },
      calcLabelWidth () {
        return this.labelWidth || this.form && this.form.labelWidth || null
      },
      calcDisabled () {
        return this.disabled !== undefined ? this.disabled : this.form && this.form.disabled !== undefined ? this.form.disabled : false
      }
    },
    mounted () {
      if (this.form) {
        this.form.updateItems(this);
      }
    },
    methods: {
      // 手动验证方法
      validate () {
        return Promise.all(this.rules.map(rule => validate(rule, this.currentValue))).then(() => {
          this.ruleMessage = ''
          return Promise.resolve()
        }).catch(e => {
          this.ruleMessage = e
          return Promise.reject(e)
        })
      },
      open () {
        if (this.calcDisabled || this.readonly) {
          return false
        }
        this.$refs.picker.open()
      },
      cancel () {
        this.$emit('cancel')
      },
      submit ([result]) {
        let value = this.getValue(result)
        this.setCurrentValue(value)
      },
      clear () {
        this.$emit('input', '')
        this.$emit('change', '')
        this.$emit('clear')
        this.setCurrentValue('')
      },
      setCurrentValue (value) {
        if (value === this.currentValue) {
          return false
        }
        this.currentValue = value
        this.validate()
        this.$emit('input', value)
        this.$emit('change', value)
      },
      getPickerOption () {
        return [(function () {
          return this.options
        }).bind(this)]
      },

      getLabel (target) {
        return this.prop.label && is(target, 'object') ? target[this.prop.label] : target
      },
      getValue (target) {
        return this.prop.value && is(target, 'object') ? target[this.prop.value] : target
      }
    },
    watch: {
      'value': {
        handler (val) {
          this.setCurrentValue(val)
        },
        immediate: true
      }
    },
    destroyed () {
      if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
      }
      if (this.form) {
        this.form.removeItem(this);
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../src/assets/less/variables.less";
  @import "../../src/assets/less/mixin.less";

  .pl-datetime {
    background-color: #fff;
    padding: 0 1.2em;
    line-height: normal;
    overflow: hidden;

    * {
      box-sizing: border-box;
    }
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
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      .placeholder {
        color: #757575;
      }
    }
    &-label {
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
    &.is-disabled {
      background-color: #ebebe4;
    }
  }
</style>
