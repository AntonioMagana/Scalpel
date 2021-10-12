const proxy = require('http-proxy-middleware')

module.exports = function(app) {

  require('dotenv').config()

  const apiUrl = process.env.DO_API_URL
  const headers  = {
    'x-rapidapi-host': process.env.DO_API_HOST,
    'x-rapidapi-key': process.env.DO_API_KEY
  }

  // define http-proxy-middleware
  let DOProxy = proxy({
    target: apiUrl,
    changeOrigin: true,
  pathRewrite: {
    '^/api/' : '/'
  },
    headers: headers,
  })

  // define the route and map the proxy
  app.use('/api', DOProxy)

};