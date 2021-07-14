// next.config.js
const withImages = require('next-images')

const config = withImages({
  esModule: true,
})

module.exports = {
  config,
  trailingSlash: true,
}




