<template>
  <div class="content">
    <h3>基础用法</h3>
    <pl-upload v-model="files" accept="image/*" class="file-upload"></pl-upload>
    <h3>自定义按钮</h3>
    <pl-upload v-model="files" accept="image/*" class="file-upload">
      <span slot="tips">请选择图片，格式不限</span>
      <template v-slot="scope">
        <pl-button class="home" @click="setHomePage(scope.file)" size="small">设为首页</pl-button>
      </template>
      <pl-button slot="button" size="small">添加图片</pl-button>
    </pl-upload>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        files: []
      }
    },
    methods: {
      setHomePage (file) {
        console.log(file)
      }
    }
  }
</script>
<style scoped>
  .file-upload {
    position: relative;
  }
  .home {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>
