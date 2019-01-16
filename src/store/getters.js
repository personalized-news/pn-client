const getters = {
  allNews: states => states.news.allNews, // news是store的一个模块
  newsDetail: states => states.news.newsDetail,
  userName: states => states.user.userName,
  newsChannel: states => states.news.newsChannel
}

export default getters
