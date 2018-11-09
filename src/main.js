// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import '@/assets/global.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI, {size: 'small', zIndex: 3000})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 注入路由，这样在整个应用中都有路由功能
  store, // 注入store，这样在实例的所有组件下都能通过this.$store使用store
  components: { App },
  template: '<App/>'
})
