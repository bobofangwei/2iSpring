import Vue from 'vue'
import Router from 'vue-router'
const login = (resolve) => require(['../components/pages/login/login.vue'], resolve);
const errorPage = (resolve) => require(['../components/pages/404/404.vue'], resolve);
const searchResult = (resolve) => require(['../components/pages/searchResult/searchResult.vue'], resolve);
Vue.use(Router)

export const constantRouterMap = [{
    path: '/login',
    component: login,
    name: 'login'
  },
  {
    path: '/',
    component: searchResult,
    name: 'searchResult'
  }, {
    path: '*',
    component: errorPage,
    name: '404'
  }
];

export default new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
});
