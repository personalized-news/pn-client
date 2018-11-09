const news = {
  state: {
    allNews: [] // 存放所有的新闻
  },
  mutations: {
    SELECT_NEWS: (states, kind) => {
      console.log(kind)
      console.log(states.allNews.findIndex((item) => item.kind === kind))
      if (states.allNews.findIndex((item) => item.kind === kind) === -1) {
        return true
      } else return false
    }
  },
  actions: {
    selectNews ({commit}, kind) {
      commit('SELECT_NEWS', kind)
    }
  }
}

export default news
