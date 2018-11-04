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

function checkId (username, kind) {
  let url = ''
  if (kind === 1) url = 'user/signup'
  else url = 'user/login'
  return request({ // requset是一个axios实例
    url: url,
    method: 'post',
    data: stringify({
      username
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
export let sp = {
  checkId: checkId,
  signup: signup,
  checkData: checkData
}

export let lg = {
  checkId: checkId,
  login: login,
  checkData: checkData
}
