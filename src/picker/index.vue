<template>
  <div class="pl-picker" :class="[isOpen ? 'pl-picker--open' : 'pl-picker--close', visible ? '' : 'pl-picker--hide']">
    <div class="pl-picker-content" v-if="isOpen">
      <div class="pl-picker-top">
        <div class="pl-picker-btn--cancel" @click="cancel">取消</div>
        <div class="pl-picker-title">{{title}}</div>
        <div class="pl-picker-btn--submit" @click="submit">确认</div>
      </div>
      <div class="pl-picker-inner" ref="inner">
        <div class="pl-picker-inner-col"
          v-for="(items, i) in computedOption"
          :key="i"
          @touchstart="handlerScroll($event, i)"
          @touchmove="handlerScroll($event, i)"
          @touchend="handlerScroll($event, i)"
          @touchcancel="handlerScroll($event, i)" :style="{width: 1 / computedOption.length * 100 + '%'}">
          <ul class="pl-picker-inner-row" ref="inner-col">
            <li class="pl-picker-inner-item" v-for="(item, j) in items" :key="j" :style="itemStyle" ref="inner-item">
              <slot :item="item">{{getLabel(item)}}</slot>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="pl-picker-layer" @click="close"></div>
  </div>
</template>

<script>
  import {is} from '../assets/utils'

  export default {
    name: 'plPicker',
    componentName: 'plPicker',
    props: {
      title: String,        // 标题
      defaultValue: Array,  // 默认选中值
      options: {         // 下拉选项，回调式：[function() {}]，嵌套式：{children: [{children: []}]}
        type: [Array, Object],
        default () {
          return []
        }
      },
      props: {
        type: Object,  // 显示的标签和返回的值 {label, value, children}
        default () {
          return {}
        }
      }
    },
    data () {
      return {
        isOpen: false,
        visible: false,
        renderType: 'function',    // 渲染模式，function：函数回调，object：children子项嵌套模式

        computedOption: [],        // 计算后的下拉选项
        selectedValue: [],         // 已选中的项 index

        innerHeight: 0,            // 下拉框高度
        itemHeight: 0,             // 子项高度
        translate: [],              // 每一列的滚动高度

        transDiff: 0,
        transStart: 0,
        transEnd: 0
      }
    },
    computed: {
      itemStyle () {
        return {
          height: this.itemHeight + 'px',
          lineHeight: this.itemHeight + 'px'
        }
      }
    },
    mounted () {

    },
    methods: {
      // 手动打开弹框
      open () {
        this.isOpen = true
        this.visible = true

        this.$nextTick(() => {
          this.calculate()

          // 滚动到默认值位置
          if (this.defaultValue && this.defaultValue.length) {
            this.defaultValue.forEach((value, i) => {
              let index = this.computedOption[i].findIndex(item => this.getValue(item) === value)
              if (index > 0 && index < this.computedOption[i].length) {
                let translate = index * this.itemHeight
                this.$set(this.selectedValue, i, index)
                this.$set(this.translate, i, translate)
                this.setPosition(translate, i)
              }
            })
          }
        })
      },
      close () {
        this.isOpen = false
        setTimeout(() => {
          this.visible = false
        }, 300)
      },
      // 重置选项
      reset () {
        this.$set(this, 'selectedValue', this.selectedValue.map(() => 0))
        this.$set(this, 'translate', this.translate.map(() => 0))
      },
      // 取消
      cancel () {
        this.$emit('cancel')
        this.reset()
        this.close()
      },
      // 确定
      submit () {
        this.$emit('submit', this.selectedValue.map((value, index) => this.computedOption[index][value]))
        this.reset()
        this.close()
      },
      // 滚动方法
      handlerScroll (e, index) {
        let cols = this.$refs['inner-col']
        // 当前滚动的位置具体数值
        let translate
        // 当前滚动到的项index
        let selected

        e.preventDefault()
        e.stopPropagation()

        switch (e.type) {
          case 'touchstart':
            this.transDiff = this.translate[index]
            this.transStart = e.touches[0].clientY
            cols[index].style.transition = cols[index].style.webkitTransition = `none`
            break;
          case 'touchmove':
            this.transEnd = e.touches[0].clientY
            translate = this.transDiff + this.transStart - this.transEnd
            this.$set(this.translate, index, translate)
            this.setPosition(translate, index)
            break;
          case 'touchend':
          case 'touchcancel':
            // 当前滚动到的项index
            selected = Math.round(this.translate[index] / this.itemHeight)

            if (selected < 0) {
              selected = 0
            }
            if (selected >= this.computedOption[index].length) {
              selected = this.computedOption[index].length - 1
            }
            translate = selected * this.itemHeight

            this.$set(this.selectedValue, index, selected)
            this.$set(this.translate, index, translate)
            cols[index].style.transition = cols[index].style.webkitTransition = ''

            this.setChildren(this.computedOption[index][selected], index)
            this.setPosition(translate, index)
            break;
        }
      },
      // 设置列表滚动定位
      setPosition (translate, index) {
        let cols = this.$refs['inner-col']
        if (cols && cols[index]) {
          cols[index].style.transform = cols[index].style.webkitTransform = `translateY(${this.itemHeight * 2 - translate}px)`
        }
      },
      // 设置子列表项
      setChildren (selected, index) {
        if (this.renderType === 'function') {
          this.options.forEach((item, i) => {
            if (i > index) {
              let result = item.apply(null, this.selectedValue.slice(0, i).map((item, index) => this.computedOption[index][item]))
              this.$set(this.computedOption, i, result)

              if (!this.selectedValue[i] || this.selectedValue[i] >= result.length) {
                this.$set(this.translate, i, 0)
                this.$set(this.selectedValue, i, 0)
                this.setPosition(0, i)
              }
            }
          })
        } else if (this.renderType === 'object') {
          let find = (target, i) => {
            let children = this.getChildren(target)

            if (children.length) {
              this.$set(this.computedOption, i, children)

              if (!this.selectedValue[i] || this.selectedValue[i] >= children.length) {
                this.$set(this.translate, i, 0)
                this.$set(this.selectedValue, i, 0)
                this.setPosition(0, i)
              }

              find(children[0], i + 1)
            }
          }
          find(selected, index + 1)
        }
      },
      // 计算子项高度
      calculate () {
        if (this.$refs.inner) {
          this.innerHeight = this.$refs.inner.offsetHeight
          this.itemHeight = Math.round(this.innerHeight / 5)
          this.translate.map((translate, index) => {
            this.setPosition(translate, index)
          })
        }
      },

      getLabel (target) {
        return this.props.label && is(target, 'object') ? target[this.props.label] : target
      },
      getValue (target) {
        return this.props.value && is(target, 'object') ? target[this.props.value] : target
      },
      getChildren (target) {
        return this.props.children && is(target, 'object') ? target[this.props.children] : target
      }
    },
    watch: {
      'options': {
        handler (val) {
          if (is(val, 'array') && val.every(item => is(item, 'function'))) {
            this.renderType = 'function'
            this.setChildren(null, -1)

          } else if (is(val, 'object') && Array.isArray(val[this.props.children])) {
            this.renderType = 'object'
            this.setChildren(val, -1)
          }
        },
        immediate: true
      }
    },
  }
</script>

<style lang="less" scoped>
  @import "../../assets/less/mixin.less";

  @keyframes up {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes down {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(100%);
    }
  }
  @keyframes in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  .pl-picker {
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    height: 100%;

    &--open {
      display: flex;
      .pl-picker-content {
        animation: up 0.3s ease 1 forwards;
      }
      .pl-picker-layer {
        animation: in 0.3s ease 1 forwards;
      }
    }

    &--close {
      .pl-picker-content {
        animation: down 0.3s ease 1 forwards;
      }
      .pl-picker-layer {
        animation: out 0.3s ease 1 forwards;
      }
    }
    &--hide {
      display: none;
    }

    &-content {
      position: relative;
      z-index: 1;
      .font-size(16);
      color: #333;
      background-color: #fff;
    }
    &-layer {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      background-color: rgba(0, 0, 0, 0.5);
    }
    &-top {
      .height(44);
      .line-height(44);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-top: 1px solid #ebedf0;
      border-bottom: 1px solid #ebedf0;
    }
    &-btn {
      &--cancel,
      &--submit {
        .font-size(14);
        color: #3388FF;
        .margin(0, 20);
      }
    }
    &-inner {
      .height(194);
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      overflow: hidden;

      &-col {
        flex: 1;
        height: 100%;
        text-align: center;
        position: relative;
        z-index: 1;

        &::before,
        &::after {
          content: '';
          position: absolute;
          left: 0;
          z-index: 3;
          display: block;
          width: 100%;
          height: 40%;
        }
        &::before {
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.4) 100%);
          top: 0;
          border-bottom: 1px solid #ebedf0;
        }
        &::after {
          background: linear-gradient(0deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.4) 100%);
          bottom: 0;
          border-top: 1px solid #ebedf0;
        }
      }
      &-row {
        list-style: none;
        padding: 0;
        margin: 0;
        transition: all 0.3s ease;
      }
      &-item {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
</style>
