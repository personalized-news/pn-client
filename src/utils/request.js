import axios from 'axios'
import { Message } from 'element-ui'

// import store from '../store'
// import { getToken } from '@/util/auth'

const service = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000
})
// 表示在跨域请求时需要使用凭证
service.defaults.writeCredentials = true
// 设置请求的默认首部
service.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
// 在请求发送之前将数据进行编码
// service.defaults.transformRequest = [function (data) {
//   let newData = ''
//   for (let k in data) { // 对数据进行编码
//     newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&'
//   }
//   return newData
// }]

service.interceptors.request.use(req => {
  /* if (store.getters.token) {
    req.headers['X-Token'] = getToken()
  } */
  console.log(req)
  return req
}, err => {
  console.log(err)
  return Promise.reject(err)
})

service.interceptors.response.use(res => {
  console.log(res)
  return res
}, err => {
  console.log(err)
  Message({
    message: err.message,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(err)
})

export default service
