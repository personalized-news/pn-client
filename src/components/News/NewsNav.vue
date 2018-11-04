<template>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>新闻分类</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">推荐</el-menu-item>
            <el-menu-item index="1-2">热点</el-menu-item>
            <el-menu-item index="1-3">图片</el-menu-item>
            <el-menu-item index="1-4">科技</el-menu-item>
            <el-menu-item index="1-5">娱乐</el-menu-item>
            <el-menu-item index="1-6">游戏</el-menu-item>
            <el-menu-item index="1-7">体育</el-menu-item>
            <el-menu-item index="1-8">汽车</el-menu-item>
            <el-menu-item index="1-9">财经</el-menu-item>
            <el-menu-item index="1-10">搞笑</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'NewsNav',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
  .tac{
    width: 30%;
  }
</style>
