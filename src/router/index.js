import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Login from '@/views/Login'
import Register from '@/views/Register'
import NewsDetail from '@/views/NewsDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PnIndex',
      component: Index
    },
    {
      path: '/user/login',
      name: 'UserLogin',
      component: Login
    },
    {
      path: '/user/signup',
      name: 'UserRegister',
      component: Register
    },
    {
      path: '/news/newsDetail',
      name: 'newsDetail',
      component: NewsDetail
    }
  ]
})
