const news = {
  state: {
    allNews: [] // 存放所有的新闻
  },
  mutations: {
    ADD_NEWS: (states, news) => {
      if (states.allNews.findIndex((item) => item.kind === news.kind) === -1) {
        states.allNews.push({
          kind: news.kind,
          news: news.main
        })
      }
    }
  },
  actions: {
    addNews ({commit}, news) {
      commit('ADD_NEWS', news)
    }
  }
}

export default news
