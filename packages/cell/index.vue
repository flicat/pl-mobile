<template>
  <div v-bind="$props" :class="['pl-cell', 'pl-cell-' + direction]" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
  import {is} from '../../src/assets/utils'

  export default {
    name: 'plCell',
    componentName: 'plCell',
    props: {
      direction: {          // 排列方式  column / row
        type: String,
        default: 'row'
      },
      span: Array,
      gap: String,
      justifyItems: {
        type: String,      // 横向排列方式：normal / baseline / stretch / start / end / center / flex-start / flex-end / left / right / self-start / self-end / revert / legacy
        default: 'normal'
      },
      alignItems: {
        type: String,      // 纵向排列方式：normal / baseline / flex-start / flex-end / start / end / center / self-start / self-end / stretch / baseline
        default: 'center'
      },
      justifyContent: {
        type: String,      // 横向排列方式：normal / left / right / stretch / start / end / center / flex-start / flex-end / space-between / space-around / space-evenly / revert
        default: 'normal'
      },
      alignContent: {
        type: String,      // 纵向排列方式：normal / baseline / stretch / start / end / center / flex-start / flex-end / space-between / space-around / space-evenly / revert
        default: 'normal'
      }
    },
    computed: {
      templates () {
        if (this.span && this.span.length) {
          return this.span.filter(item => item && (is(item, 'string') || is(item, 'number'))).map(item => {
            if (is(item, 'number')) {
              return item + 'fr'
            } else {
              return item
            }
          }).join(' ')
        }
        return null
      },
      rowStyle () {
        return {
          ...(this.templates ? {[this.direction === 'row' ? 'grid-template-columns' : 'grid-template-rows']: this.templates} : null),
          ...(this.gap ? {[this.direction === 'row' ? 'grid-column-gap' : 'grid-row-gap']: this.gap} : null),
          ...(this.justifyItems ? {'justify-items': this.justifyItems} : null),
          ...(this.alignItems ? {'align-items': this.alignItems} : null),
          ...(this.justifyContent ? {'justify-content': this.justifyContent} : null),
          ...(this.alignContent ? {'align-content': this.alignContent} : null)
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .pl-cell {
    display: grid;
    line-height: normal;

    &-row > * {
      overflow-x: hidden;
    }
    &-column > * {
      overflow-y: hidden;
    }
  }
</style>
