<template>
  <div class="pl-select" :class="[
    calcSize ? 'pl-select--' + calcSize : '',
    multiple ? 'pl-select--multiple' : '',
    {
      'is-disabled': calcDisabled,
      'pl-select--error': ruleMessage
    }
    ]">
    <div class="pl-select-cell" :class="{'pl-select-cell--label': label}">
      <div class="pl-select-label" :class="{'pl-select-label--require': required}" v-if="label" :style="{width: calcLabelWidth}">
        <slot name="label">{{label}}</slot>
      </div>
      <div class="pl-select-prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </div>
      <div class="pl-select-inner" @click="open">
        <span v-if="multiple && currentValue && currentValue.length" class="title">
          <em class="tag" v-for="(item, i) in currentValue" :key="i">{{calcOptions.get(item)}}</em>
        </span>
        <span v-else-if="!multiple && currentValue !== null && currentValue !== undefined">{{calcOptions.get(currentValue)}}</span>
        <span class="placeholder" v-else>{{placeholder}}</span>
      </div>
      <div class="pl-select-clear" @touchstart.stop.prevent="clear" @mousedown.stop.prevent="clear">
        <icon name="icon-roundclosefill" fill="#ccc" v-if="showClear"></icon>
      </div>
      <div class="pl-select-icon">
        <i class="icon-arrow"></i>
      </div>
      <div class="pl-select-append" v-if="$slots.append">
        <slot name="append"></slot>
      </div>
    </div>
    <div class="pl-select-error" v-if="ruleMessage">{{ruleMessage}}</div>

    <popup ref="picker" position="bottom">
      <div class="pl-select-popup-content">
        <div class="pl-select-popup-top">
          <div class="pl-select-popup-btn--cancel" @click="close">取消</div>
          <div class="pl-select-popup-title">{{placeholder}}</div>
          <div class="pl-select-popup-btn--submit" @click="submit">确认</div>
        </div>
        <div class="pl-select-popup-inner">
          <ul class="pl-select-popup-inner-row">
            <li class="pl-select-popup-inner-item" v-for="(item, i) in options" :key="i">
              <input :type="multiple ? 'checkbox' : 'radio'" class="inner-input" v-model="popupValue" :value="getValue(item)" :disabled="item.disabled">
              <span><slot :item="item">{{item[prop.label]}}</slot></span>
              <icon name="icon-duigou" class="checked-icon"></icon>
            </li>
          </ul>
        </div>
      </div>
    </popup>
  </div>
</template>

<script>
  import icon from '../icon/index.vue'
  import popup from '../popup/index.vue'
  import {is, validate} from '../../src/assets/utils'

  export default {
    name: 'plSelect',
    componentName: 'plSelect',
    components: {
      icon,
      popup
    },
    model: {
      event: 'change'
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
      options: {         // 下拉选项
        type: Array,
        default () {
          return []
        }
      },
      prop: {
        type: Object,  // 显示的标签和返回的值 {label, value}
        default () {
          return {label: 'label', value: 'value'}
        }
      },
      multiple: Boolean,        // 多选
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
        popupValue: null,

        ruleMessage: '',
        handlers: []
      }
    },
    computed: {
      showClear () {
        return this.clearable && !this.calcDisabled && (!this.multiple && this.currentValue || this.currentValue.length)
      },
      calcOptions () {
        return new Map(this.options.map(item => [this.getValue(item), this.getLabel(item)]))
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
        if (this.calcDisabled || this.readonly || !this.options.length) {
          return false
        }
        if (Array.isArray(this.currentValue)) {
          this.popupValue = [...this.currentValue]
        } else {
          this.popupValue = this.currentValue
        }
        this.$refs.picker.open()
      },
      close () {
        this.$refs.picker.close()
      },
      clear () {
        this.$emit('change', '')
        this.$emit('clear')
        this.setCurrentValue(null)
      },
      setCurrentValue (value) {
        if (value === this.currentValue) {
          return false
        }
        this.currentValue = value
      },
      submit () {
        this.setCurrentValue(this.popupValue)
        this.emit()
      },
      emit () {
        this.validate()
        this.$emit('change', this.currentValue)
        this.close()
      },
      // 获取标签名，如果没有指定 prop 则返回对象本身
      getLabel (target) {
        return this.prop.label ? target[this.prop.label] : String(target)
      },
      // 获取值，如果没有指定 prop 则返回对象本身
      getValue (target) {
        return this.prop.value ? target[this.prop.value] : target
      }
    },
    watch: {
      'value': {
        handler (val) {
          if (this.multiple && !is(val, 'array')) {
            this.currentValue = []
          } else {
            this.setCurrentValue(val)
          }
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
  @import "../../src/assets/less/mixin.less";

  .pl-select {
    background-color: var(--input-bg);
    padding: 0 1.2em;
    line-height: normal;
    position: relative;

    * {
      box-sizing: border-box;
    }

    &-cell {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;

      &--label {
        .pl-select-inner {
          text-align: right;
        }
      }
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
        color: var(--primary-text);
      }
    }
    &--multiple {
      .pl-select-inner {
        white-space: normal;

        .tag {
          font-style: normal;
          margin: 2px 5px 2px 0;
          display: inline-block;
          padding: 0 0.3em;
          height: 100%;
          background-color: var(--tag-bg);
          color: var(--select-color);
          border-radius: 5px;
        }
      }
    }
    &-label {
      padding-right: 0.4em;

      &--require {
        position: relative;

        &::before {
          position: absolute;
          content: '*';
          color: var(--danger);
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
      color: var(--danger);
      line-height: 2em;
    }
    &-icon {
      .icon-arrow {
        display: block;
        width: 0;
        height: 0;
        border: 3px solid;
        border-color: transparent transparent currentColor currentColor;
        transform: rotate(-45deg);
        transform-origin: 0 0;
        opacity: 0.6;
      }
    }

    &.is-disabled {
      background-color: var(--select-disabled-bg);
    }

    .pl-select-popup {

      &-content {
        position: relative;
        z-index: 1;
        .font-size(16);
        color: var(--select-popup-color);
        background-color: var(--select-popup-bg);
      }

      &-top {
        .height(44);
        .line-height(44);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-top: 1px solid var(--picker-border);
        border-bottom: 1px solid var(--picker-border);
      }
      &-btn {
        &--cancel,
        &--submit {
          .font-size(14);
          .margin(0, 20);
        }
        &--cancel {
          color: var(--picker-btn-cancle);
        }
        &--submit {
          color: var(--picker-btn-submit);
        }
      }
      &-inner {
        max-height: 70vh;
        min-height: (150 / @rem);
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        overflow: hidden;
        overscroll-behavior: contain; // 阻止滚动传播

        &-row {
          width: 100%;
          overflow: auto;
          margin: 0;
          padding: 0;
          list-style: none;
          -webkit-overflow-scrolling: auto;
        }
        &-item {
          display: flex;
          flex-direction: row;
          align-items: center;
          position: relative;
          padding: 0 1.2em;
          .height(50);
          .line-height(50);
          border-bottom: 1px solid var(--select-popup-border);

          &:last-child {
            border-bottom: 0 none;
          }
          .checked-icon {
            margin-left: auto;
            display: none;

            /deep/ svg {
              fill: var(--primary)
            }
          }
          .inner-input {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            opacity: 0;
            margin: 0;

            &:checked ~ .checked-icon {
              display: block;
            }
            &:checked ~ span {
              color: var(--primary);
            }
            &:disabled ~ span {
              color: var(--disabled);
            }
          }
        }
      }
    }
  }
</style>
