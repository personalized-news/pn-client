<template>
<div>
  <div class="block">
    <el-pagination
      layout="prev, pager, next"
      :total="newsNumber"
      :current-page="1"
      @next-click="change('next')"
      @prev-click="change('pre')"
      @current-change="change('other')">
    </el-pagination>
  </div>
</div>
</template>

<script>
export default {
  name: 'PaginationNews',
  props: ['newsNumber'],
  mounted: function () {
    console.log(this.newsNumber)
  },
  methods: {
    change: function (kind) {
      this.$emit('changePage', kind)
      console.log(event)
    }
  }
}
</script>

<style scoped>
</style>
