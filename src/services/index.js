// index.js //可根据不同模块区分文件请求
import httpService from './httpService';

function getNovelList(params) {
  return httpService.get(`mould/item/list`, {
  	params
  })
}
function getBoughtList(params) {
  return httpService.get(`mould/item/buyed/list`, {
  	params
  })
}

export default {
  getNovelList,getBoughtList
}