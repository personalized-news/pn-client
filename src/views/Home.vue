<template>
<div class="container">
  <div class="top">
    <the-header :isLogin="isLogin" :username="decodeURIComponent(this.$route.query.userId)"></the-header>
  </div>
  <div class="showNews">
    <NewsNav @get-news="get"></NewsNav>
    <div class="news">
      <li v-for="item in showNews" :key="item.id">
        <newsItem :newsItem="item" ></newsItem>
      </li>
      <PaginationNews :newsNumber="this.newNumber" @get="get"></PaginationNews>
    </div>
  </div>
</div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import NewsNav from '@/components/News/NewsNav'
import NewsItem from '@/components/News/NewsItem'
import PaginationNews from '@/components/News/PaginationNews'
import {getNews} from '@/api/news'

export default {
  name: 'PnIndex',
  components: {
    TheHeader,
    NewsNav,
    NewsItem,
    PaginationNews
  },
  data: function () {
    return {
      showNews: [],
      news: [],
      newNumber: 10
    }
  },
  created: function () {
    getNews('recommend').then((res) => {
      if (res.newsList) { this.showNews = res.newsList }
    }).catch((err) => {
      console.log(err.toString())
    })
  },
  methods: {
    get: function (kind) {
      getNews(kind).then((res) => {
        if (res.newsList) { this.showNews = res.newsList }
      }).catch((err) => {
        console.log(err.toString())
      })
    }
  },
  computed: {
    isLogin: function () {
      // 在没有参数传过来时，this.$route.query是空对象
      // 用isLogin决定顶层的导航显示
      // 刚进入页面时.this.$route.query是空对象
      if (this.$route.query.userId === undefined) { return false } else return this.$route.query.userId.length > 0
    }
  },
  destroyed: function () {
    console.log('销毁Index组件')
  }
}
</script>

<style scoped>

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
  .showNews{
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .news {
    width: 45%;
    height: 30%;
    margin-right: 20%;
   }
</style>
