import axios from 'axios';
import config from './config.js';
import {
  Message,
  MessageBox
} from 'element-ui';
import store from '@/store/index.js';
import {
  removeToken
} from '@/util/auth.js';
import * as types from '@/store/types.js';

const axiosService = axios.create(config);
// 其实也可以开启，至于后台使用与否再说吧
// axiosService.interceptors.request.use((config) => {
//   if (store.getters.token) {
//     config.headers['X-Token'] = getToken();
//   }
//   return config;
// }, (error) => {
//   console.log(error);
//   return Promise.reject(error);
// });

axiosService.interceptors.response.use((res) => {
  console.log('axiosService response', res);
  if (res.data.status != '0') {
    // 和后台约定，当返回-1的时候，代表用户session已经失效
    if (res.data.status == '-1') {
      // 说明用户在后台的session失效，需要重新登录
      MessageBox.alert('您已被系统登出，请重新登录', '请重新登录', {
        confirmButtonText: '重新登录'
      }).then(() => {
        // 不能这么写，因为访问logout的接口时，也会判断用户已经登出，还是会返回-1的错误码，导致一直递归
        //   store.dispatch('logout').then(() => {
        //     location.reload();
        //   });
        store.commit(types.SET_TOKEN, '');
        store.commit(types.SET_USERNAME, '');
        removeToken();
        location.reload();
      });
    } else {
      // 其他错误类型
      Message({
        message: res.data.msg,
        type: 'error',
        showClose: true
      });
    }
    return Promise.reject(res.data);
  } else {
    return res.data.res;
  }
}, (error) => {
  // 这种情况是接口本身出错，而非返回错误的状态码，比如请求超时
  Message({
    message: '服务出错，请联系系统管理员',
    type: 'error',
    showClose: true
  });
  return Promise.reject(error);
});
export default axiosService;
