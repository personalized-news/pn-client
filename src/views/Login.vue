<template>
  <el-form :model="LoginForm" status-icon :rules="rules2" ref="LoginForm" label-width="100px" class="login-form">
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
    let _this = this
    var checkId = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('账号不能为空'))
      } else {
        lg.checkId(value, 2).then(res => {
          if (res.data.status === 0) return callback(new Error('该账号不存在'))
          else callback() // 当存在时显示有效标识
        }).catch((err) => { // 输出错误信息
          return callback(new Error(err.toString()))
        })
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else { // 发送请求验证密码
        if (_this.LoginForm.username === '') return
        lg.login(_this.LoginForm.username, value).then(res => {
          if (res.data.status === 0) return callback(new Error('密码不正确'))
          else callback() // 当存在时显示有效标识
        }).catch((err) => { // 输出错误信息
          return callback(new Error(err.toString()))
        })
      }
    }
    return {
      LoginForm: {
        username: '',
        password: ''
      },
      rules2: {
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        username: [
          { validator: checkId, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      let _this = this
      if (!lg.checkData(this.LoginForm)) return
      lg.login(this.LoginForm.username, this.LoginForm.password)
        .then(res => {
          if (res.data.status === 200) { this.$router.push({path: '/', query: {userId: encodeURIComponent(_this.LoginForm.username)}}) } else alert(res.data.message)
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
