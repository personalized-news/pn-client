import request from '@/utils/request'

function getNews (kind = 'recommend') {
  return request({
    method: 'get',
    url: '/news',
    data: {
      kind: kind
    }
  })
}

export {
  getNews
}
