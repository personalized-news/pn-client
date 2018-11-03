import axios from 'axios'
import { Message } from 'element-ui'
// import store from '../store'
// import { getToken } from '@/util/auth'

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000
})

service.defaults.writeCredentials = true
service.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'

service.interceptors.request.use(req => {
  /* if (store.getters.token) {
    req.headers['X-Token'] = getToken()
  } */
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
