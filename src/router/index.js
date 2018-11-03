import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Login from '@/views/login'
import Register from '@/views/register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/user/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/user/signup',
      name: 'Register',
      component: Register
    }
  ]
})
