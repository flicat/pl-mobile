<template>
  <div class="pl-radio" :class="[
    size ? 'pl-radio--' + size : '',
    {
      'is-vertical': vertical,
      'is-disabled': disabled,
      'pl-radio--error': ruleMessage
    }
    ]">
    <div class="pl-radio-cell">
      <div class="pl-radio-label" :class="{'pl-radio-label--require': required}" v-if="label" :style="{width: labelWidth}">
        <slot name="label">{{label}}</slot>
      </div>
      <div class="pl-radio-inner">
        <div class="pl-radio-item"
          v-for="(item, i) in data"
          :key="i"
          :class="{'is-active': item[prop.value] === currentValue, 'is-disabled': disabled || item[prop.disabled], 'is-button': button, 'is-vertical': vertical}"
          @click="!(disabled || item[prop.disabled]) && emit(item[prop.value])">
          <icon v-if="!button" class="pl-radio-icon"
            :name="item[prop.value] === currentValue ? 'icon-btn_choose' : 'icon-btn_cicle_unchoose'"
            :fill="disabled || item[prop.disabled] ? '#ebedf0' : item[prop.value] === currentValue ? '@primary' : '#dcdfe6'"></icon>
          <span><slot :item="item">{{item[prop.label]}}</slot></span>
        </div>
      </div>
    </div>
    <div class="pl-radio-error" v-if="ruleMessage">{{ruleMessage}}</div>
  </div>
</template>

<script>
  import {validate} from '../../src/assets/utils'
  import icon from '../icon'

  // radio
  export default {
    name: 'plRadio',
    componentName: 'plRadio',
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
      data: {          // 单选选项
        type: Array,
        default () {
          return []
        }
      },
      prop: {          // key与value
        type: Object,
        default () {
          return {label: 'label', value: 'value', disabled: 'disabled'}
        }
      },
      value: {
        default: null
      },
      disabled: Boolean,            // 禁用
      required: Boolean,            // 必填 *号
      button: Boolean,              // 是否是按钮样式
      vertical: Boolean,            // 是否是竖向排列
      label: String,                // 左侧 label
      labelWidth: String            // label 宽度
    },
    data () {
      return {
        currentValue: this.value === undefined ? '' : this.value,
        ruleMessage: ''     // 验证错误提示信息
      }
    },
    computed: {

    },
    mounted () {

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
      setCurrentValue (value) {
        if (value === this.currentValue) {
          return false
        }
        this.currentValue = value
      },
      emit (value) {
        if (value === this.currentValue) {
          return false
        }
        this.currentValue = value
        this.validate()
        this.$emit('input', value)
        this.$emit('change', value)
      }
    },
    watch: {
      'value' (val) {
        this.setCurrentValue(val)
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../src/assets/less/mixin.less";
  @import "../../src/assets/less/variables.less";

  .pl-radio {
    background-color: #fff;
    padding: 0 1.2em;
    line-height: normal;

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
    }
    .pl-radio-label {
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
    .pl-radio-item {
      position: relative;
      display: inline-table;
      margin-right: 1em;
      color: #333;

      &:last-child {
        margin-right: 0;
      }
      .pl-radio-icon {
        margin-right: 0.5em;
        font-size: 1em;

        & + span {
          display: inline-block;
          vertical-align: middle;
        }
      }
      &.is-vertical {
        display: table;
        width: 100%;
        margin-right: 0;

        .pl-radio-icon {
          position: absolute;
          right: 0.5em;
        }
        &:not(.is-button) {
          &:not(:last-child) {
            margin-bottom: 0.5em;
            padding-bottom: 0.5em;
            border-bottom: 1px solid #f0f0f0;
          }
        }
      }
      &.is-button {
        margin: 0;
        padding: 0.3em 0.5em;
        border: 1px solid #dcdfe6;

        .pl-radio-icon {
          display: none;
        }
        &:not(.is-vertical) {
          &:not(:last-child) {
            border-right: 0 none;
          }
          &:first-child {
            border-radius: 5px 0 0 5px;
          }
          &:last-child {
            border-radius: 0 5px 5px 0;
          }
        }
        &.is-vertical {
          &:not(:last-child) {
            border-bottom: 0 none;
          }
          &:first-child {
            border-radius: 5px 5px 0 0;
          }
          &:last-child {
            border-radius: 0 0 5px 5px;
          }
        }
        &.is-active {
          background-color: @primary;
          color: #fff;
        }
        &.is-disabled {
          background-color: #ebebe4;
          color: #999;
        }
      }
      &.is-active {
        color: @primary;
        border-color: @primary;
      }
      &.is-disabled {
        color: #c8c9cc;
      }
    }

    &-error {
      padding: 0 0.5em;
      color: @danger;
      line-height: 2em;
    }

    &.is-vertical {
      .pl-radio-label {
        align-self: flex-start;
        margin-top: 1em;
      }
    }
  }
</style>
