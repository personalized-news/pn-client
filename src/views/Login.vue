<template>
  <el-form :model="LoginForm" status-icon ref="LoginForm" label-width="100px" class="login-form">
    <el-form-item label="账号" prop="username">
      <el-input v-model="LoginForm.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="LoginForm.password" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('LoginForm')">登录</el-button>
      <el-button @click="resetForm('LoginForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { login } from '@/api/user'

export default {
  data () {
    return {
      LoginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    submitForm (formName) {
      login(this.LoginForm.username, this.LoginForm.password)
        .then(res => {
          this.$router.push({ path: '/' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}

</script>
<style scoped>
.login-form {
  width: 350px;
  height: 350px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -250px;
  margin-top: -175px;
}

</style>
