<template>
  <header>
    <p>Personalized News</p>
    <div>
      <nav v-show="!username || !isLogin.status">
        <login-dialog @getName="getUsername" @loginIn="loginIn"></login-dialog>
        <register-dialog></register-dialog>
      </nav>
      <div v-show="username && isLogin.status" class="userInfo">
        <span>欢迎您！{{username}}</span>
        <el-button type="text" @click="userLogout" size="medium">登出</el-button>
      </div>
    </div>
  </header>
</template>
<script>
import LoginDialog from './LoginDialog'
import RegisterDialog from './RegisterDialog'
import { logout } from '@/api/user'
import { removeToken, removeUserName, getUserName } from '@/utils/auth'

export default {
  components: { LoginDialog, RegisterDialog },
  props: ['isLogin'],
  data: function () {
    return {
      userName: ''
    }
  },
  computed: {
    username: function () {
      return this.userName
    }
  },
  created () {
    console.log('重新渲染')
    this.getUsername()
  },
  methods: {
    getUsername () {
      this.userName = this.$store.getters.userName || getUserName()// 在刚登入的时候，如果cookie中的用户信息还在的话,就直接显示登陆状态
    },
    userLogout () {
      this.$store.dispatch('setUserName', '')
      removeToken()
      removeUserName()
      logout()
        .then(res => {
          this.getUsername()
        })
    },
    loginIn () {
      this.isLogin.status = true
    }
  }
}

</script>
<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
}

header a {
  padding: 5px;
  color: #000;
}

header a:hover {
  border: 1px solid #000;
}

</style>
