module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/scss/_variables.scss";@import "@/assets/scss/reset.scss";'
      }
    }
  },
}