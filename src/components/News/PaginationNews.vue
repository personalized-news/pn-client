<template>
    <div class="block">
      <el-pagination
        @current-change="getNews"
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
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
    getNews: function () {
      this.$emit('get')
    }
  }
}
</script>

<style scoped>
</style>
