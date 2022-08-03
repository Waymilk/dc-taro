let baseUrlPrefix = ''
const env = process.env.NODE_ENV === 'development' ? 'development' : 'production'
console.log('编译环境：',process.env.NODE_ENV)
console.log('小程序环境：',process.env.TARO_ENV)

switch (env) {
  case 'development':
    baseUrlPrefix = process.env.TARO_ENV === 'weapp'?'https://dev-api-user.decai.club/api/':'/api/'
    break
  case 'production':
    baseUrlPrefix = 'https://...'
    break
}

const api = {
  baseUrl: baseUrlPrefix,
//其他相关变量
}

export default api