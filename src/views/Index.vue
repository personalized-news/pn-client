<template>
<div class="container">
  <div class="top">
    <the-header :isLogin="isLogin" :username="decodeURIComponent(this.$route.query.userId)"></the-header>
  </div>
  <div class="showNews">
    <NewsNav></NewsNav>
    <div class="news">
      <li v-for="item in news" :key="item.id">
        <newsItem :newsItem="item" ></newsItem>
      </li>
    </div>
  </div>
</div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import NewsNav from '@/components/News/NewsNav'
import NewsItem from '@/components/News/NewsItem'
import {getNews} from '@/api/news'
import Vue from 'vue'
export default {
  name: 'PnIndex',
  components: {
    TheHeader,
    NewsNav,
    NewsItem
  },
  mounted: function () {
    getNews().then((res) => {
      // this.$store.dispatch('selectNews', 'recommend').then(
      //   () => {
      //     if (true) {
      //       Vue.set(this.$store.getters.allNews, this.$store.getters.allNews.length, {
      //         kind: 'recommend', // 推荐的新闻
      //         news: res.data.data
      //       })
      //     }
      //     console.log(this.$store.getters.allNews)
      //   })
      // 防止重复存储
      if (this.$store.getters.allNews.findIndex((item) => item.kind === 'recommend') === -1) {
        Vue.set(this.$store.getters.allNews, this.$store.getters.allNews.length, {
          kind: 'recommend', // 推荐的新闻
          news: res.data.data
        })
      }
      console.log(this.$store.getters.allNews)
    }).catch((err) => {
      console.log(err.toString())
    })
  },
  computed: {
    isLogin: function () {
      // 在没有参数传过来时，this.$route.query是空对象
      // 用isLogin决定顶层的导航显示
      // 刚进入页面时.this.$route.query是空对象
      if (this.$route.query.userId === undefined) { return false } else return this.$route.query.userId.length > 0
    },
    news: function () {
      if (this.$store.getters.allNews[0]) { return this.$store.getters.allNews[0].news } else return []
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
