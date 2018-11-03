<template>
  <div>
    <the-header></the-header>
    <!--用decodeURLComponent对传过来的数据进行解码-->
    <div v-show="isLogin  === true">欢迎您！{{decodeURIComponent($route.query.userId)}}</div>
  </div>
</template>

<script>
import { getNews } from '@/api/news'
import TheHeader from '@/components/TheHeader'

export default {
  name: 'index',
  components: { TheHeader },
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
      if (this.$route.query.userId === undefined) { return false } else return this.$route.query.userId.length > 0
    }
  }
}
</script>
