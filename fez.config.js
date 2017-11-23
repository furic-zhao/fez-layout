/* ==================================
 * @ 2017 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

export default {
  useInject: {
    bower: {
      available: true
    },
    lib: {
      available: true
    }
  },
  browserify: {
    shim: [{
      "import": "Vue",
      "from": "vue"
    }, {
      "import": "VueRouter",
      "from": "vue-router"
    }, {
      "import": "Vuex",
      "from": "vuex"
    }]
  }
}
