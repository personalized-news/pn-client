// import { stringify } from 'qs'
import request from '@/utils/request'

export function getNews () {
  return request({
    method: 'post',
    url: 'http://route.showapi.com/109-35',
    data: {
      showapi_timestamp: new Date(),
      showapi_appid: '78816', // 这里需要改成自己的appid
      showapi_sign: '71cbafa11053462da0e3433b63420b12', // 这里需要改成自己的应用的密钥secret
      channelId: '',
      channelName: '',
      title: '足球',
      page: '1',
      needContent: '0',
      needHtml: '0',
      needAllList: '0',
      maxResult: '20',
      id: ''
    }
  })
}
