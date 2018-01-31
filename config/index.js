// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    // 配置文件默认是'/',但是由于部署环境下目录结构是www/ReportForms/static/index.html而非网站根目录
    // index.html中引用app.js的路径是http://www.xxx.com/static/js/app.js
    // 但是app.js的实际路径是http://www.xxx.com/ReportForms/static/js/app.js
    // 因此要改成<script type="text/javascript" src="./static/js/app.js"></script>
    // 或者<script type="text/javascript" src="/ReportForms/static/js/app.js"></script>
    // 如果不想手动去改
    // 需要将assetsPublicPath改成'./'或者'/ReportForms'
    assetsPublicPath: './',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      // '/api': {
      //   target: 'http://10.3.117.23:8080',
      //   changeOrigin: true,
      //   pathRewrite: { '^/api': '/BaseController' }
      // }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
