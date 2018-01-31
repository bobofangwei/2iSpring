import * as types from '../types';
import {
  getToken,
  setToken,
  removeToken
} from '@/util/auth.js';
import {
  login,
  logout
} from '@/api/user.js';
const userInfo = {
  state: {
    username: '',
    token: ''
  },
  mutations: {
    [types.SET_TOKEN]: (state, token) => {
      state.token = token;
    },
    [types.SET_USERNAME]: (state, username) => {
      state.username = username;
    }
  },
  actions: {
    login: function({
      commit
    }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo.username, userInfo.password).then(res => {
          // todo:在axios的拦截中不是已经将data分离了么?
          console.log('store loginAction response.res', res);
          // 设置cookie
          setToken(res.token);
          commit(types.SET_TOKEN, res.token);
          commit(types.SET_USERNAME, userInfo.username);
          resolve(res);
        }).catch((error) => {
          reject(error);
        })
      });
    },
    logout: function({
      commit,
      state
    }) {
      return new Promise((resolve, reject) => {
        logout(state.token || getToken()).then((response) => {
          commit(types.SET_TOKEN, '');
          commit(types.SET_USERNAME, '');
          removeToken();
          resolve();
        }).catch((error) => {
          reject(error);
        });
      });
    }
    //   getUserInfo: function({
    //     commit,
    //     state
    //   }) {
    //     return new Promise((resolve, reject) => {
    //       getUserInfo(state.token).then((res) => {
    //         console.log('store getUserInfo Action res', res);
    //         commit(types.SET_NAME, res.username);
    //         commit(types.SET_ROLES, res.roles);
    //         commit(types.SET_AVATAE, res.avatar);
    //         resolve(res);
    //       }).catch(error => {
    //         reject(error);
    //       })
    //     });
    //   }
  }
};
export default userInfo;
