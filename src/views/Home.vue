<template>
<div class="container">
  <div class="top">
    <the-header :isLogin="isLogin" ></the-header>
  </div>
  <div class="showNews">
    <NewsNav @get-news="get"></NewsNav>
    <div class="news">
      <li v-for="item in showNews" :key="item.id">
        <newsItem :newsItem="item" ></newsItem>
      </li>
      <PaginationNews :newsNumber="this.newNumber" :get="get" :total="total"></PaginationNews>
    </div>
  </div>
</div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import NewsNav from '@/components/News/NewsNav'
import NewsItem from '@/components/News/NewsItem'
import PaginationNews from '@/components/News/PaginationNews'
import { getNews } from '@/api/news'
import { Message } from 'element-ui'
import { logout } from '../api/user'
import { removeToken, removeUserName } from '../utils/auth'

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
      newNumber: 10,
      isLogin: { status: true },
      total: 1
    }
  },
  created: function () {
    this.$store.dispatch('setNewsChannel', 'recommend')
    getNews('recommend', 1).then((res) => {
      this.total = res.total
      console.log('传来的有页数', this.total)
      if (res.message === 'invalid token') {
        Message({
          message: 'Token过期，请重新登陆',
          type: 'error',
          duration: 5 * 1000
        })
        removeToken() // 移除无效token
        removeUserName()
        logout().then(res => {
          if (res.code === 0) {
            this.$store.dispatch('setUserName', '') // 把store中的userName置为空串
            this.isLogin.status = false
          }
        }).catch((err) => {
          this.$message.error(err.toString())
        })
      }
      if (res.newsList) {
        this.showNews = res.newsList
        this.$store.dispatch('setNews', res.newsList)
      }
    }).catch((err) => {
      this.$message.error(err.toString())
    })
  },
  methods: {
    get: function (kind, pageNumber) {
      if (kind !== '') {
        this.$store.dispatch('setNewsChannel', kind)
      } else kind = this.$store.getters.newsChannel
      getNews(kind, pageNumber).then((res) => {
        if (res.newsList) {
          this.showNews = res.newsList
          this.$store.dispatch('setNews', res.newsList)
        }
        document.querySelector('html').scrollTop = 0
      }).catch((err) => {
        this.$message.error(err.toString())
      })
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
