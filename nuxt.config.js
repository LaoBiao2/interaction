const webpack = require('webpack')
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'interaction',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '互动商务' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/common.css' },
      { rel: 'stylesheet', href: '/animate.css' }
    ],
    script: [
        { type: 'text/javascript', src: '/wow.min.js' }
        // { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    plugins: [
        new webpack.ProvidePlugin({
          '$': 'jquery'
        })
    ]
  },
  modules: [
      '@nuxtjs/axios',
      '@nuxtjs/proxy'
  ],
  proxy: [
    [
      '/api', 
      { 
        target: 'http://localhost:8082', // api主机
        pathRewrite: { '^/api' : '/' }
      }
    ]
  ],
  plugins: [
    { src: '~/plugins/swiper.js', ssr: false },
    { src: '~/plugins/global.js' },
    // { src: '~/plugins/axios.js' }
  ],
  css: [
    'swiper/dist/css/swiper.css'
  ],
}

