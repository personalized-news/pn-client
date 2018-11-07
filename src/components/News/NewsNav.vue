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
            <span>国内</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">军事</el-menu-item>
            <el-menu-item index="1-1">台湾</el-menu-item>
            <el-menu-item index="1-1">港澳</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>国内焦点</span>
          </template>
          <el-menu-item-group>
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
