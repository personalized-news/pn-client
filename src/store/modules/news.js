const news = {
  state: {
    allNews: [], // 存放所有的新闻,
    newsDetail: {}, // 存放正在浏览的新闻详情内容,
    newsChannel: '' // 存放当前正在浏览的新闻种类
  },
  mutations: {
    SET_NEWS: (states, news) => {
      console.log('要存在state里的数据', news)
      states.allNews = news
    },
    SELECT_NEWS: (states, news) => {
      // news 包含查看新闻的id
      let newsIndex
      if ((newsIndex = states.allNews.findIndex((item) => item.id === news.id)) !== -1) {
        states.newsDetail = states.allNews[newsIndex] // 选出所需的新闻
        sessionStorage.setItem('news', JSON.stringify(states.newsDetail)) // 把对象存在lessionStorage中
      }
    },
    SET_NEWSCHANNEL: (states, newChannel) => {
      states.newsChannel = newChannel
    }
  },
  actions: {
    setNews ({commit}, news) {
      commit('SET_NEWS', news)
    },
    selectNews ({commit}, news) {
      commit('SELECT_NEWS', news)
    },
    setNewsChannel ({commit}, newsChannel) {
      commit('SET_NEWSCHANNEL', newsChannel)
    }
  }
}

export default news
