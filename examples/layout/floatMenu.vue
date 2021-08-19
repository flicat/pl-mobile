<template>
  <div>
    <div class="float-menu" :style="{transform: 'translate(' + iconPostionX + 'px,' + iconPostionY + 'px' + ')'}" @click="showMenu" @touchstart="touchHander" @touchmove="touchHander" @touchend="touchHander" @touchcancel="touchHander">
      <pl-icon name="icon-yanjing" fill="#666"></pl-icon>
    </div>
    <pl-popup position="center" ref="popupCenter" class="popup">
      <div class="popup-content">
        <div class="link" v-for="link in list" :key="link.path">
          <pl-icon name="icon-roundright"></pl-icon>
          <span @click="goPage(link.path)">{{link.meta.title}}</span>
        </div>
      </div>
    </pl-popup>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
  },
  data() {
    return {
      iconPostionX: Number(window.localStorage.menuPositionX) || 0,
      iconPostionY: Number(window.localStorage.menuPositionY) || 0,
      startX: 0,
      startY: 0
    }
  },
  methods: {
    showMenu() {
      this.$refs.popupCenter.open()
    },
    goPage(path) {
      this.$router.push({ path })
      this.$refs.popupCenter.close()
    },
    touchHander(e) {
      switch (e.type) {
        case 'touchstart':
          this.startX = e.touches[0].clientX - this.iconPostionX
          this.startY = e.touches[0].clientY - this.iconPostionY
          break;
        case 'touchmove':
          e.preventDefault()
          e.stopPropagation()
          this.iconPostionX = e.touches[0].clientX - this.startX
          this.iconPostionY = e.touches[0].clientY - this.startY
          break;
        case 'touchend':
        case 'touchcancel':
          window.localStorage.menuPositionX = this.iconPostionX
          window.localStorage.menuPositionY = this.iconPostionY
          break;
      }
    }
  }
}
</script>

<style lang="less" scoped>
.float-menu {
  position: fixed;
  right: 30px;
  top: 30px;
  z-index: 999;
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  background: #fff;
  box-shadow: 0 0 12px inset #aaa;
  .pl-icon {
    margin: auto;
  }
}
.popup {
  width: 100vw;
  height: 100vh;
  .popup-content {
    width: 80vw;
    height: 80vh;
    background: #fff;
    border-radius: 5px;
    overflow: scroll;
    padding: 15px 20px;
    .link {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 40px;
      align-items: center;
      cursor: pointer;
      color: #88c9da;
      .pl-icon {
        margin-right: 10px;
      }
      span {
        text-decoration: underline;
      }
    }
  }
}
</style>
