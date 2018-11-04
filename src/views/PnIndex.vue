<template>
<div class="container">
  <div class="top">
    <the-header :isLogin="isLogin"></the-header>
    <!--用decodeURLComponent对传过来的数据进行解码-->
    <div v-show="isLogin  === true">欢迎您！{{decodeURIComponent($route.query.userId)}}</div>
  </div>
  <div class="showNews">
    <NewsNav></NewsNav>
    <div class="news"></div>
  </div>
</div>
</template>

<script>
import { getNews } from '@/api/news'
import TheHeader from '@/components/TheHeader'
import NewsNav from '@/components/NewsNav/NewsNav'

export default {
  name: 'PnIndex',
  components: {
    TheHeader,
    NewsNav
  },
  props: {
    userId: {
      default: ''
    }
  },
  mounted () {
    // 通过api请求新闻数据
    getNews()
      .then(res => {
        console.log(res)
      })
  },
  computed: {
    isLogin: function () {
      // 在没有参数传过来时，this.$route.query是空对象
      // 用isLogin决定顶层的导航显示
      // 刚进入页面时.this.$route.query是空对象
      if (this.$route.query.userId === undefined) { return false } else return this.$route.query.userId.length > 0
    }
  }
}
</script>

<style scoped>
  .top{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 20px;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
</style>
