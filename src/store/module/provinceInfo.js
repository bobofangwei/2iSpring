import * as types from '@/store/types.js';
// import { getProvinceMap } from '@/api/basicInfo.js';
const provinceInfo = {
  state: {
    provinceArr: [{
      'provinceCode': '福建',
      'provinceName': '福建'
    }, {
      'provinceCode': '西藏',
      'provinceName': '西藏'
    }, {
      'provinceCode': '上海',
      'provinceName': '上海'
    }, {
      'provinceCode': '青海',
      'provinceName': '青海'
    }, {
      'provinceCode': '江苏',
      'provinceName': '江苏'
    }, {
      'provinceCode': '宁夏',
      'provinceName': '宁夏'
    }, {
      'provinceCode': '重庆',
      'provinceName': '重庆'
    }, {
      'provinceCode': '浙江',
      'provinceName': '浙江'
    }, {
      'provinceCode': '山东',
      'provinceName': '山东'
    }, {
      'provinceCode': '海南',
      'provinceName': '海南'
    }, {
      'provinceCode': '河北',
      'provinceName': '河北'
    }, {
      'provinceCode': '贵州',
      'provinceName': '贵州'
    }, {
      'provinceCode': '辽宁',
      'provinceName': '辽宁'
    }, {
      'provinceCode': '台湾',
      'provinceName': '台湾'
    }, {
      'provinceCode': '内蒙古',
      'provinceName': '内蒙古'
    }, {
      'provinceCode': '广东',
      'provinceName': '广东'
    }, {
      'provinceCode': '黑龙江',
      'provinceName': '黑龙江'
    }, {
      'provinceCode': '山西',
      'provinceName': '山西'
    }, {
      'provinceCode': '新疆',
      'provinceName': '新疆'
    }, {
      'provinceCode': '湖北',
      'provinceName': '湖北'
    }, {
      'provinceCode': '天津',
      'provinceName': '天津'
    }, {
      'provinceCode': '云南',
      'provinceName': '云南'
    }, {
      'provinceCode': '北京',
      'provinceName': '北京'
    }, {
      'provinceCode': '江西',
      'provinceName': '江西'
    }, {
      'provinceCode': '四川',
      'provinceName': '四川'
    }, {
      'provinceCode': '湖南',
      'provinceName': '湖南'
    }, {
      'provinceCode': '河南',
      'provinceName': '河南'
    }, {
      'provinceCode': '安徽',
      'provinceName': '安徽'
    }, {
      'provinceCode': '甘肃',
      'provinceName': '甘肃'
    }, {
      'provinceCode': '陕西',
      'provinceName': '陕西'
    }, {
      'provinceCode': '其他',
      'provinceName': '其他'
    }, {
      'provinceCode': '广西',
      'provinceName': '广西'
    }, {
      'provinceCode': '吉林',
      'provinceName': '吉林'
    }]
  },
  mutations: {
    [types.SET_PROVINCEARR]: (state, provinceArr) => {
      state.provinceArr = provinceArr;
    }
  }
  // actions: {
  //   provinceMapAsycn: ({commit}) => {
  //       return getProvinceMap().then((res) => {
  //           console.log('请求获取的省分列表', res);
  //           commit(types.SET_PROVINCEMAP, res);
  //       });
  //   }
  // }
};
export default provinceInfo;
