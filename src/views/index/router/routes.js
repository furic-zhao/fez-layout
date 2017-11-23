import Login from "../module/login";
import page404 from "../module/404";
import App from "../module/app";
import AppTest from "../module/app/test";
// Routes
const routes = [{
  path: '/login',
  component: Login
}, {
  path: '',
  component: App,
  children: [{
    path: '',
    component: AppTest
  }, {
    path: '/index',
    component: AppTest
  }, {
    path: '/test',
    component: AppTest
  }, {
    path: '/category/*',
    component: page404
  }]
}, {
  path: '*',
  component: page404
}]


export default routes
