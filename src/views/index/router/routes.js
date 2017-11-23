import Login from "../module/login";
import page404 from "../module/404";
import App from "../module/app";
import AppIndex from "../module/app/index";
// Routes
const routes = [{
  path: '/login',
  component: Login
}, {
  path: '',
  component: App,
  children: [{
    path: '',
    component: AppIndex
  }, {
    path: '/index',
    component: AppIndex
  }, {
    path: '/category/*',
    component: page404
  }]
}, {
  path: '*',
  component: page404
}]


export default routes
