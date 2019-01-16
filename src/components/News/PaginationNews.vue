<template>
    <div class="block">
      <el-pagination
        @current-change="getNews"
        layout="prev, pager, next"
        :total="(parseInt(this.total) === this.total ? this.total : parseInt(this.total) + 1) * 10">
      </el-pagination>
    </div>
</template>

<script>
export default {
  name: 'PaginationNews',
  props: ['newsNumber', 'get', 'total'],
  methods: {
    getNews: function (pageNumber) {
      this.get('', pageNumber)
    }
  }
}
</script>

<style scoped>
</style>
