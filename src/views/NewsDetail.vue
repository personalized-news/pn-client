<template>
  <div class="container">
    <header class="item"><h1>{{news.title}}</h1></header>
    <span class="item">{{news.pubDate}}</span>
    <img class="item" v-show="news.havePic" :src="news.havePic === true ? news.imageurls[0].url: ''" alt="无">
    <main class="item">{{main}}</main>
    <span class="item kind">{{news.channelName}}</span>
  </div>
</template>

<script>
export default {
  name: 'NewsDetail',
  data: function () {
    return {
      news: {},
      main: ''
    }
  },
  created: function () {
    // console.log(sessionStorage.getItem('news'))
    this.news = JSON.parse(sessionStorage.getItem('news'))
    // this.news = this.$store.getters.newsDetail
    for (let content of this.news.allList.slice(1)) {
      if (typeof content !== 'object') {
        this.main += content
      }
    }
  },
  beforeDestroy: function () {
    sessionStorage.clear()
  }
}
</script>

<style scoped>
  .container{
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0 auto;
  }
  .item{
    margin-top: 2%;
  }
  .kind {
    color: #999;
    font-size: 14px;
  }
</style>
