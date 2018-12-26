const news = {
  state: {
    allNews: [], // 存放所有的新闻,
    newsDetail: {} // 存放正在浏览的新闻详情内容
  },
  mutations: {
    ADD_NEWS: (states, news) => {
      console.log('要存在state里的数据', news)
      states.allNews = news
      // if (states.allNews.findIndex((item) => item.kind === news.kind) === -1) {
      //   states.allNews.push({
      //     kind: news.kind,
      //     news: news.main
      //   })
      // }
    },
    SELECT_NEWS: (states, news) => {
      // news 包含查看新闻的id
      let newsIndex
      if ((newsIndex = states.allNews.findIndex((item) => item.id === news.id)) !== -1) {
        states.newsDetail = states.allNews[newsIndex] // 选出所需的新闻
        sessionStorage.setItem('news', JSON.stringify(states.newsDetail)) // 把对象存在lessionStorage中
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
