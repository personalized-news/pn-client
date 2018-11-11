import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import NewsDetail from '@/views/NewsDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/news/detail',
      name: 'newsDetail',
      component: NewsDetail
    }
  ]
})
