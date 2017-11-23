/* ==================================
 * @ 2017 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

/* index 页面脚本 */

// import 'babel-polyfill';

import Vue from "vue";

// import fezui from 'fezui';

import index from "./index.vue";

import router from "./router";

import store from "./store";

import VueProgressBar from "vue-progressbar";

import {
  Scrollbar,
  Breadcrumb,
  BreadcrumbItem,
  Menu,
  Submenu,
  MenuItem
} from './layout';

Vue.component(Scrollbar.name, Scrollbar);
Vue.component(Breadcrumb.name, Breadcrumb);
Vue.component(BreadcrumbItem.name, BreadcrumbItem);
Vue.component(Menu.name, Menu);
Vue.component(Submenu.name, Submenu);
Vue.component(MenuItem.name, MenuItem);

Vue.use(VueProgressBar, {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '2px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
});

// Vue.use(fezui);

new Vue({
  store,
  router,
  el: "#app",
  render: h => h(index)
});
