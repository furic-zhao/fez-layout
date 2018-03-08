/* ==================================
 * @ 2017 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

export default {
  webpack: {
    config: {
      externals: {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        vuex: 'Vuex'
      }
    }
  }
}
