<template>
    <router-view></router-view>
</template>

<script>
//index是初始页面组件
import VueRouter from 'vue-router'
import index from './components/index.vue'
import login from './components/login.vue'
import register from './components/register.vue'

//建立路由
const routes = [
    {
        path: '/',
        component: index
    },
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
    mode: 'history',
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
