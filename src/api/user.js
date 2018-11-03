import { stringify } from 'qs'
import request from '@/utils/request'

export function login (username, password) {
  return request({
    url: '/user/login',
    method: 'post',
    data: stringify({
      username,
      password
    })
  })
}

export function signup (username, password, repassword) {
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
