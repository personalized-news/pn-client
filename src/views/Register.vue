<template>
  <el-form :model="RegisterForm"  ref="RegisterForm" label-width="100px" class="register-form">
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
import { sp } from '@/api/user'

export default {
  data () {
    return {
      RegisterForm: {
        username: '',
        password: '',
        repassword: ''
      }
    }
  },
  methods: {
    submitForm (formName) {
      // 当有数据为空时,不能发送请求
      if (!sp.checkData(this.RegisterForm)) return
      sp.signup(this.RegisterForm.username, this.RegisterForm.password, this.RegisterForm.repassword)
        .then(res => {
          if (res.data.code === 0) {
            alert('注册成功,赶快去登陆吧！')
            this.$router.push({path: '/user/login'})
          } else alert(res.data.message)
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
