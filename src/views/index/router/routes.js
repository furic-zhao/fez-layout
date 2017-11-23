import Login from "../module/login";
import page404 from "../module/404";
import App from "../module/app";
import AppMain from "../module/app/main";
// Routes
const routes = [{
  path: '/login',
  component: Login
}, {
  path: '',
  component: App,
  children: [{
    path: '',
    component: AppMain
  }, {
    path: '/index',
    component: AppMain
  }, {
    path: '/category/*',
    component: page404
  }]
}, {
  path: '*',
  component: page404
}]


export default routes
