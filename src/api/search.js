import axios from '@/util/axiosService.js';
export function searchAddress(data) {
  const url = 'controller/query/address';
  return axios.post(url, data);
}
