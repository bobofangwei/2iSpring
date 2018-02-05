// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import '@/common/scss/index.scss'
import store from './store/index.js';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Vue.config.productionTip = false
Vue.use(ElementUi);
const whiteList = ['/login'];
router.beforeEach((to, from, next) => {
  NProgress.start();
  // 使用token来判断用户是否登录
  if (store.getters.token) {
    // 如果有用户登录信息，那么可以免登录，直接访问根路径
    if (to.path === '/login') {
      next({
        path: '/'
      });
    } else {
      next();
    }
  } else {
    // 如果当前访问的就是登录页面或者其他无须登录即可访问的页面，那么直接next()
    if (whiteList.indexOf(to.path) >= 0) {
      next();
    } else {
      // 否则跳转到登录页面
      next({
        path: '/login'
      });
    }
    // next();
  }
});
router.afterEach(() => {
  NProgress.done();
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
