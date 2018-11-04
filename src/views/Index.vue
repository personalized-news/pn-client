<template>
<div class="container">
  <div class="top">
    <the-header :isLogin="isLogin" :username="decodeURIComponent(this.$route.query.userId)"></the-header>
  </div>
  <div class="showNews">
    <NewsNav></NewsNav>
    <div class="news">
      <NewsItem></NewsItem>
    </div>
  </div>
</div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import NewsNav from '@/components/News/NewsNav'
import NewsItem from '@/components/News/NewsItem'

export default {
  name: 'PnIndex',
  components: {
    TheHeader,
    NewsNav,
    NewsItem
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
</style>
