<template>
  <div id="app">
    <index/>
    <router-link to="/login">登陆</router-link>
    <router-link to="/register">注册</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
//index是初始页面组件
import  VueRouter from 'vue-router'
import index from './components/index.vue'
import login from './components/login.vue'
import  register from './components/register.vue'

//建立路由
const routes = [
    {
        path: '/login',
        component: login
    },
    {
        path: '/register',
        component: register
    }
];

const router = new VueRouter({
    routes: routes
});
export default {
  name: 'app',
  router: router,
  components: {
    index: index,
    login: login,
    register: register
  }
}
</script>

<style>

</style>
