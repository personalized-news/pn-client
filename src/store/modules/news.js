const news = {
  state: {
    allNews: [], // 存放所有的新闻,
    newsDetail: {} // 存放正在浏览的新闻详情内容
  },
  mutations: {
    ADD_NEWS: (states, news) => {
      console.log(states.allNews)
      if (states.allNews.findIndex((item) => item.kind === news.kind) === -1) {
        states.allNews.push({
          kind: news.kind,
          news: news.main
        })
      }
    },
    SELECT_NEWS: (states, news) => {
      let index, newsIndex
      index = states.allNews.findIndex((item) => item.kind === 'recommend') // index记录这则新闻所在的大类的在数组里的位置
      if (index === -1) return
      if ((newsIndex = states.allNews[index].news.findIndex((item) => item.id === news.id)) !== -1) {
        states.newsDetail = states.allNews[index].news[newsIndex] // 选出所需的新闻
        console.log(states.newsDetail)
        sessionStorage.setItem('news', JSON.stringify(states.newsDetail))
      }
    }
  },
  actions: {
    addNews ({commit}, news) {
      commit('ADD_NEWS', news)
    },
    selectNews ({commit}, news) {
      commit('SELECT_NEWS', news)
    }
  }
}

export default news
