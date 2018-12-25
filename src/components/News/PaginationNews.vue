<template>
<div>
    <div class="block">
      <el-pagination
        layout="prev, pager, next"
        :total="1000">
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
      console.log(event)
    }
  }
}
</script>

<style scoped>
</style>
