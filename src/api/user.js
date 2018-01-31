import axios from '@/util/axiosService.js';

export function login(username, password) {
  const loginUrl = 'controller/login';
  console.log('login request');
  return axios.post(loginUrl, {
    username,
    password
  });
};
// export function getUserInfo() {
//   const getInfoUrl = 'BaseController/getUserInfo';
//   return axios.request({
//     url: getInfoUrl,
//     method: 'GET'
//   });
// };
export function logout(token) {
  const logoutUrl = 'controller/logout';
  return axios.post(logoutUrl, {
    token
  });
};
