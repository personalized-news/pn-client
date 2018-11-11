<template>
  <header>
    <p>Personalized News</p>
    <div>
      <nav v-show="!username">
        <login-dialog></login-dialog>
        <register-dialog></register-dialog>
      </nav>
      <div v-show="username" class="userInfo">
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
import { getToken, removeToken } from '@/utils/auth'

export default {
  components: { LoginDialog, RegisterDialog },
  data () {
    return {
      username: ''
    }
  },
  created () {
    this.getUsername()
  },
  methods: {
    getUsername () {
      this.username = getToken()
    },
    userLogout () {
      removeToken()
      logout()
        .then(res => {
          this.getUsername()
        })
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
