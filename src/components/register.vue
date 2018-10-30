<template>
  <div id="container">
    <router-link to="/">返回</router-link>
    <div class="re">
      <form action="#" @submit.prevent="submit">
        <p><input type="text" placeholder="账号" required></p>
        <p><input type="password" placeholder="密码" required minlength="8"></p>
        <p><input type="password" placeholder="再次输入密码" required minlength="8"></p>
        <p><input type="submit" value="注册"></p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'register',
  methods: {
    submit: function () {
      let _this = this
      let id = document.querySelector('[type="text"]').value
      let ps = document.querySelectorAll('[type="password"]')[0].value
      let reps = document.querySelectorAll('[type="password"]')[1].value
      console.log({
        password: ps,
        username: id
      })
      axios.defaults.headers = { // 设置axios的默认首部
        'Content-type': 'application/x-www-form-urlencoded'
      }
      axios.defaults.transformRequest = [function (data) {
        let newData = ''
        for (let k in data) { // 对数据进行编码
          newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&'
        }
        return newData
      }]
      axios({
        method: 'post',
        url: 'http://localhost:3000/user/signup',
        data: {
          username: id,
          password: ps,
          repassword: reps
        }
      }).then(function (response) {
        if (response.data.status === 200) {
          alert('注册成功！！赶快去登陆吧')
          _this.$router.push({name: 'Login'}) // 导向登陆的路由
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

  .re{
    width: 350px;
    height: 350px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -175px;
    margin-top: -175px;
    border: 1px solid #aeacac;
  }

  .re form{
    display: flex;
    align-items: center;
    flex-direction: column;
  }
</style>
