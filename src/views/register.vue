<template>
  <el-form :model="RegisterForm" status-icon ref="RegisterForm" label-width="100px" class="register-form">
    <el-form-item label="账号" prop="username">
      <el-input v-model="RegisterForm.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="RegisterForm.password" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="repassword">
      <el-input type="password" v-model="RegisterForm.repassword" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('RegisterForm')">注册</el-button>
      <el-button @click="resetForm('RegisterForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { signup } from '@/api/user'

export default {
  data () {
    return {
      RegisterForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    submitForm (formName) {
      signup(this.RegisterForm.username, this.RegisterForm.password)
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
.register-form {
  width: 350px;
  height: 350px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -250px;
  margin-top: -175px;
}

</style>
