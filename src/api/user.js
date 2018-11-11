import { stringify } from 'qs'
import request from '@/utils/request'

function login (username, password) {
  return request({
    url: '/user/login',
    method: 'post',
    data: stringify({
      username,
      password
    })
  })
}

function signup (username, password, repassword) {
  return request({
    url: '/user/signup',
    method: 'post',
    data: stringify({
      username,
      password,
      repassword
    })
  })
}

function checkData (data) {
  // 当有数据为空时,不能发送请求
  for (let k in data) {
    if (data[k] === '') {
      if (k === 'password') alert('密码不能为空')
      else if (k === 'username') alert('账号不能为空')
      else alert('请再次输入密码')
      return false
    }
  }
  return true
}
export const sp = {
  signup: signup,
  checkData: checkData
}

export const lg = {
  login: login,
  checkData: checkData
}
