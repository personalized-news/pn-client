<template>
  <div class="container">
    <header>{{news.title}}</header>
    <span>{{news.pubDate}}</span>
    <main>{{news.desc}}</main>
    <span>{{news.channelName}}</span>
  </div>
</template>

<script>
export default {
  name: 'NewsDetail',
  data: function () {
    return {
      news: {}
    }
  },
  mounted: function () {
    // console.log(sessionStorage.getItem('news'))
    this.news = JSON.parse(sessionStorage.getItem('news'))
    // this.news = this.$store.getters.newsDetail
  }
}
</script>

<style scoped>
  .container{
    display: flex;
    flex-direction: column;
  }
</style>
