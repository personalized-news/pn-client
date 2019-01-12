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
      <PaginationNews :newsNumber="this.newNumber" :get="get"></PaginationNews>
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
      isLogin: { status: true }
    }
  },
  created: function () {
    getNews('recommend').then((res) => {
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
        this.$store.dispatch('addNews', res.newsList)
      }
    }).catch((err) => {
      this.$message.error(err.toString())
    })
  },
  methods: {
    get: function (kind) {
      getNews(kind).then((res) => {
        if (res.newsList) { this.showNews = res.newsList }
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
