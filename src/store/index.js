import Vuex from 'vuex'
import Vue from 'vue'
import news from './modules/news'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    news,
    user
  },
  getters
})

export default store
