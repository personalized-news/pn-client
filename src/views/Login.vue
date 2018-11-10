<template>
  <el-form :model="LoginForm"  ref="LoginForm" label-width="100px" class="login-form">
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
import { lg } from '@/api/user'

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
      let _this = this
      if (!lg.checkData(this.LoginForm)) return
      lg.login(this.LoginForm.username, this.LoginForm.password)
        .then(res => {
          if (res.data.code === 0) { this.$router.push({path: '/', query: {userId: encodeURIComponent(_this.LoginForm.username)}}) } else alert(res.data.message)
        })
        .catch(err => {
          console.log(err)
        })
    },
    resetForm (formName) {
      // console.log(this.$refs)
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
