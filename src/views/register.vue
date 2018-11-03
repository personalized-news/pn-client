<template>
  <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
    <el-form-item label="账号" prop="id">
      <el-input v-model="ruleForm2.id"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
      <el-button @click="resetForm('ruleForm2')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import axios from 'axios'

axios.defaults.transformRequest = [function (data) {
  let newData = ''
  for (let k in data) { // 对数据进行编码
    newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&'
  }
  return newData
}]

axios.defaults.headers = { // 设置axios的默认首部
  'Content-type': 'application/x-www-form-urlencoded'
}
export default {
  data () {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('账号不能为空'))
      } else {
        axios({
          method: 'post',
          url: 'http://localhost:3000/user/signup',
          data: {
            username: value
          }
        }).then((response) => {
          if (response.data.message === '用户名已存在') return callback(new Error('该账号已被注册'))
          else callback()
        }).catch((res) => { // 输出错误信息
          return callback(new Error(res.toString()))
        })
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm2: {
        pass: '',
        checkPass: '',
        id: ''
      },
      rules2: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        id: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      for (let k in this.ruleForm2) {
        if (this.ruleForm2[k] === '') return
      }
      let _this = this
      console.log(this.ruleForm2)
      axios({
        method: 'post',
        url: 'http://localhost:3000/user/signup',
        data: {
          username: _this.ruleForm2.id,
          password: _this.ruleForm2.pass,
          repassword: _this.ruleForm2.checkPass
        }
      }).then((response) => {
        if (response.data.status === 200) {
          alert('注册成功！！赶快去登陆吧')
          _this.$router.push({name: 'Login'}) // 导向登陆的路由
        } else {
          alert(response.data.message)
        }
      }).catch((error) => {
        alert(error.toString())
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
  .demo-ruleForm{
    width: 350px;
    height: 350px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -250px;
    margin-top: -175px;
  }
</style>
