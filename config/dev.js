module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  mini: {},
  h5: {
    // 设置代理服务器转发
    devServer: {
     proxy: {
       'https://dev-api-user.decai.club/api/': {
         target: 'https://dev-api-user.decai.club/',
         changeOrigin: true
       }
     }
   }
 }
}
