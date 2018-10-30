<template>
  <div id="container">
    <router-link to="/">返回</router-link>
    <div class="lg">
      <form  @submit.prevent="submit">
        <p><input type="text" placeholder="账号" required></p>
        <p><input type="password" placeholder="密码" required minlength="8"></p>
        <p><input type="submit" value="登陆"></p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'login',
  methods: {
    submit: function () {
      let _this = this
      let id = document.querySelector('[type="text"]').value
      let ps = document.querySelector('[type="password"]').value
      console.log({
        name: id,
        password: ps
      })
      // 设置默认的请求头
      axios.defaults.headers = {
        'Content-type': 'application/x-www-form-urlencoded'
      }
      axios.defaults.transformRequest = [function (data) {
        let newData = ''
        for (let k in data) {
          newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&'
        }
        return newData
      }]
      axios({
        method: 'post',
        url: 'http://localhost:3000/user/login',
        data: {
          username: id,
          password: ps
        }
      }).then(function (response) {
        if (response.data.status === 200) {
          alert('登陆成功')
          _this.$router.push({name: 'Index', query: {userId: id}}) // 登陆成功之后导向Index路由
        } else {
          if (response.data.status === 0) {
            alert(response.data.message)
          }
        }
      }).catch(function (error) {
        console.log(error.toString())
      })
    }
  }
}
</script>

<style scoped>
  *{
    text-decoration: none;
  }

  #container a{
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -175px;
    margin-top: -195px;
  }

  .lg{
    width: 350px;
    height: 350px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -175px;
    margin-top: -175px;
    border: 1px solid #aeacac;
  }

  .lg form{
    display: flex;
    align-items: center;
    flex-direction: column;
  }
</style>
