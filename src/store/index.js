import Vuex from 'vuex'
import Vue from 'vue'
import news from './modules/news'
import getters from './getters'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    news
  },
  getters
})

export default store
