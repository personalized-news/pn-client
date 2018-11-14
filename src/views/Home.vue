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
      <PaginationNews :newsNumber="newsNumber" @changePage="changePage"></PaginationNews>
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
      newsNumber: 10,
      st: 0,
      end: 4
    }
  },
  created: function () {
    getNews('recommend').then((res) => {
      this.$store.dispatch('addNews', {
        kind: 'recommend',
        main: res.newsList
      })
      this.newsNumber = parseInt(res.newsList.length / 4) * 10 // 记录展示新闻需要的页数
      this.news = res.newsList.slice(0, this.newsNumber / 10 * 4) // 只记录4的倍数的新闻
      this.showNews = this.news.slice(this.st, this.end) // 每页展示四则新闻
      console.log(this.newsNumber)
    }).catch((err) => {
      console.log(err.toString())
    })
  },
  methods: {
    get: function (kind) {
      getNews(kind).then((res) => {
        this.$store.dispatch('addNews', {
          kind: kind,
          main: res.newsList
        })
        this.news = res.newsList
      }).catch((err) => {
        console.log(err.toString())
      })
    },
    changePage: function (action) {
      if (action === 'next') { // 点击下一页
        this.st = this.end === this.news.length ? 0 : this.st + 4
        this.end = this.end === this.news.length ? 4 : this.end + 4
        this.showNews = this.news.slice(this.st, this.end)
      } else if (action === 'pre') { // 点击前一页
        this.st = this.st === 0 ? this.news.length - 4 : this.st - 4
        this.end = this.end === 4 ? 4 : this.end - 4
        this.showNews = this.news.slice(this.st, this.end)
      } else { // 点击确定的页数

      }
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
