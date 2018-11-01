<template>
  <header>
    <p>这里用放个logo</p>
    <nav v-show="isLogin === false">
      <router-link to="/user/login">登陆</router-link>
      <router-link to="/user/signup">注册</router-link>
    </nav>
    <!--用decodeURLComponent对传过来的数据进行解码-->
    <div v-show="isLogin  === true">欢迎您！{{decodeURIComponent($route.query.userId)}}</div>
  </header>
</template>

<script>
import {getNowTime} from '../main'
import axios from 'axios'

axios.defaults.headers = { // 设置axios的默认首部
  'Content-type': 'application/x-www-form-urlencoded'
}
export default {
  name: 'index',
  props: {
    userId: {
      default: ''
    }
  },
  mounted () {
    // 通过api请求新闻数据
    axios({
      method: 'post',
      url: 'http://route.showapi.com/109-35',
      data: {
        showapi_timestamp: getNowTime(),
        showapi_appid: '78816', // 这里需要改成自己的appid
        showapi_sign: '71cbafa11053462da0e3433b63420b12', // 这里需要改成自己的应用的密钥secret
        channelId: '',
        channelName: '',
        title: '足球',
        page: '1',
        needContent: '0',
        needHtml: '0',
        needAllList: '0',
        maxResult: '20',
        id: ''
      }
    }).then(function (response) {
      console.log(response.data.showapi_res_code)
      console.log(response.data)
    }).catch(function (error) {
      console.log(error.toString())
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

<style scoped>
  *{
    padding: 0;
    margin: 0;
    text-decoration: none;
    color: #000;
  }

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  nav a{
    padding: 5px;
  }

  nav a:hover{
    border: 1px solid #000;
  }
</style>
