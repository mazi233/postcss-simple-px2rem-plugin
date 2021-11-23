const postcss = require('postcss')
const px2rem = require('../plugins/simple-px2rem')

postcss([px2rem({
  // options
  base: 100
})]).process('a { font-size: 20px; }').then(result => {
  console.log(result.css)
})

