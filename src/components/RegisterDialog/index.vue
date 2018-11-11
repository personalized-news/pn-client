<template>
  <div class="register-dialog">
    <el-button type="text" @click="dialogFormVisible = true" size="medium">注册</el-button>
    <el-dialog title="用户注册" :visible.sync="dialogFormVisible" :width="'35%'" :center="true">
      <el-form :model="RegisterForm" ref="RegisterForm">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="RegisterForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="RegisterForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" :label-width="formLabelWidth">
          <el-input v-model="RegisterForm.repassword" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="resetForm('RegisterForm')">取 消</el-button>
        <el-button type="primary" @click="submitForm('RegisterForm')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { signup } from '@/api/user'
import { checkData } from '@/utils/validate'
import { setToken } from '@/utils/auth'

export default {
  data () {
    return {
      dialogFormVisible: false,
      RegisterForm: {
        username: '',
        password: '',
        repassword: ''
      },
      formLabelWidth: '70px'
    }
  },
  methods: {
    submitForm (formName) {
      if (checkData(this.RegisterForm)) {
        signup(this.RegisterForm.username, this.RegisterForm.password, this.RegisterForm.repassword)
          .then(res => {
            console.log(res)
            if (res.code === 0) {
              setToken(this.RegisterForm.username)
              this.dialogFormVisible = false
              this.$message({ message: '注册成功', type: 'success' })
              this.reload()
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
.register-dialog {
  display: inline-flex;
}
</style>
