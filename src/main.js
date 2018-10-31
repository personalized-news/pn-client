// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI, {size: 'small', zIndex: 3000})
function formatterDateTime () {
  var date = new Date()
  var month = date.getMonth() + 1
  var datetime = date.getFullYear() +
    '' +// "年"
    (month >= 10 ? month : '0' + month) +
    '' +// "月"
    (date.getDate() < 10 ? '0' + date.getDate() : date
      .getDate()) +
    '' +
    (date.getHours() < 10 ? '0' + date.getHours() : date
      .getHours()) +
    '' +
    (date.getMinutes() < 10 ? '0' + date.getMinutes() : date
      .getMinutes()) +
    '' +
    (date.getSeconds() < 10 ? '0' + date.getSeconds() : date
      .getSeconds())
  return datetime
}
export var getNowTime
getNowTime = formatterDateTime
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 注入路由，这样在整个应用中都有路由功能
  components: { App },
  template: '<App/>'
})
