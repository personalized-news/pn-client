<template>
  <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
    <el-form-item label="账号" prop="id">
      <el-input v-model="ruleForm2.id"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm2')">登陆</el-button>
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
    let _this = this
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('账号不能为空'))
      } else {
        axios({
          method: 'post',
          url: 'http://localhost:3000/user/login',
          data: {
            username: value
          }
        }).then((response) => {
          if (response.data.status === 0) return callback(new Error('该账号不存在'))
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
        axios({
          method: 'post',
          url: 'http://localhost:3000/user/login',
          data: {
            username: _this.ruleForm2.id,
            password: value
          }
        }).then((response) => {
          if (response.data.status === 0) return callback(new Error('密码不正确'))
          else callback() // 当存在时显示有效标识
        }).catch((err) => { // 输出错误信息
          return callback(new Error(err.toString()))
        })
      }
    }
    return {
      ruleForm2: {
        pass: '',
        id: ''
      },
      rules2: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        id: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      for (let k in this.ruleForm2) { // 如果有一个数据没有值，就不要发送请求
        if (this.ruleForm2[k] === '') return
      }
      console.log(1)
      let _this = this
      console.log(this.ruleForm2)
      axios({
        method: 'post',
        url: 'http://localhost:3000/user/login',
        data: {
          username: _this.ruleForm2.id,
          password: _this.ruleForm2.pass
        }
      }).then((response) => {
        if (response.data.status === 200) {
          _this.$router.push({name: 'Index', query: {userId: encodeURIComponent(_this.ruleForm2.id)}}) // 导向首页的路由
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
