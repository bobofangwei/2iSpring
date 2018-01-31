import Vue from 'vue';
import Vuex from 'vuex';
import provinceInfo from './module/provinceInfo.js';
import cityInfo from './module/cityInfo.js';
import userInfo from './module/userinfo.js';
import getters from './getters.js';

Vue.use(Vuex);
var store = new Vuex.Store({
  modules: {
    provinceInfo: provinceInfo,
    cityInfo: cityInfo,
    userInfo: userInfo
  },
  getters
});
export default store;
