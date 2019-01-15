import request from '@/utils/request'

function getNews (kind = 'recommend', pageNumber = 1) {
  return request({
    method: 'get',
    url: '/news?channel=' + kind + '&pageNumber=' + pageNumber
  })
}

export {
  getNews
}
