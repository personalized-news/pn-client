<template>
  <div class="login-dialog">
    <el-button type="text" @click="dialogFormVisible = true" size="medium">登录</el-button>
    <el-dialog title="用户登录" :visible.sync="dialogFormVisible" :width="'35%'" :center="true">
      <el-form :model="LoginForm" ref="LoginForm">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="LoginForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input type="password" v-model="LoginForm.password" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="resetForm('LoginForm')">取 消</el-button>
        <el-button type="primary" @click="submitForm('LoginForm')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { login } from '@/api/user'
import { checkData } from '@/utils/validate'
import { setToken } from '@/utils/auth'

export default {
  data () {
    return {
      dialogFormVisible: false,
      LoginForm: {
        username: '',
        password: ''
      },
      formLabelWidth: '70px'
    }
  },
  methods: {
    submitForm (formName) {
      if (checkData(this.LoginForm)) {
        login(this.LoginForm.username, this.LoginForm.password)
          .then(res => {
            console.log(res.token)
            if (res.code === 0) {
              setToken(res.token) // 把token存入cookie
              this.dialogFormVisible = false
              this.$message({ message: '登录成功', type: 'success' })
              this.$store.dispatch('setUserName', this.LoginForm.username) // 把username存在store里
              this.$emit('getName')
            } else {
              this.$message.error(res.message)
            }
          })
      }
    },
    resetForm (formName) {
      this.dialogFormVisible = false
      this.$refs[formName].resetFields()
    }
  }
}

</script>

<style scoped>
.login-dialog {
  display: inline-flex;
}
</style>
