import Vue from 'vue'
import Router from 'vue-router'
import PnIndex from '@/views/PnIndex'
import UserLogin from '@/views/UserLogin'
import UserRegister from '@/views/UserRegister'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PnIndex',
      component: PnIndex
    },
    {
      path: '/user/login',
      name: 'UserLogin',
      component: UserLogin
    },
    {
      path: '/user/signup',
      name: 'UserRegister',
      component: UserRegister
    }
  ]
})
