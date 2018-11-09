import request from '@/utils/request'

function getNews () {
  return request({
    method: 'get',
    url: '/news'
  })
}

export {getNews}
