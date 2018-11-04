<template>
  <el-form :model="RegisterForm" status-icon :rules="rules2"  ref="RegisterForm" label-width="100px" class="register-form">
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
    var validateId = (rule, value, callback) => {
      console.log(value)
      if (!value) {
        return callback(new Error('账号不能为空'))
      } else {
        sp.checkId(value, 1).then(res => {
          if (res.data.status === 200) {
            callback()
          } else return callback(new Error(res.data.message))
        }).catch((err) => {
          alert(err.toString())
        })
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.RegisterForm.repassword !== '') { // 如果已经再次输入密码，就调用函数检测两次输入是否相同
          this.$refs.RegisterForm.validateField('repassword')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.RegisterForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      RegisterForm: {
        username: '',
        password: '',
        repassword: ''
      },
      rules2: {
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        repassword: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        username: [
          { validator: validateId, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      // 当有数据为空时,不能发送请求
      if (!sp.checkData(this.RegisterForm)) return
      sp.signup(this.RegisterForm.username, this.RegisterForm.password, this.RegisterForm.repassword)
        .then(res => {
          if (res.data.status === 200) {
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
