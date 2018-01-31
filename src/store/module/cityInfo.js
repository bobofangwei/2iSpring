import * as types from '@/store/types.js';
// import { getProvinceMap } from '@/api/basicInfo.js';
const cityInfo = {
  state: {
    cityMap: {
      '10': [{
        'cityCode': '00',
        'cityName': '海淀区60'
      }, {
        'cityCode': '01',
        'cityName': '丰台区29'
      }],
      '11': [{
        'cityCode': '00',
        'cityName': '海淀区88'
      }, {
        'cityCode': '01',
        'cityName': '丰台区9'
      }],
      '13': [{
        'cityCode': '00',
        'cityName': '海淀区87'
      }, {
        'cityCode': '01',
        'cityName': '丰台区54'
      }],
      '17': [{
        'cityCode': '00',
        'cityName': '海淀区4'
      }, {
        'cityCode': '01',
        'cityName': '丰台区85'
      }],
      '18': [{
        'cityCode': '00',
        'cityName': '海淀区54'
      }, {
        'cityCode': '01',
        'cityName': '丰台区83'
      }],
      '19': [{
        'cityCode': '00',
        'cityName': '海淀区34'
      }, {
        'cityCode': '01',
        'cityName': '丰台区15'
      }],
      '30': [{
        'cityCode': '00',
        'cityName': '海淀区5'
      }, {
        'cityCode': '01',
        'cityName': '丰台区21'
      }],
      '31': [{
        'cityCode': '00',
        'cityName': '海淀区37'
      }, {
        'cityCode': '01',
        'cityName': '丰台区36'
      }],
      '34': [{
        'cityCode': '00',
        'cityName': '海淀区84'
      }, {
        'cityCode': '01',
        'cityName': '丰台区38'
      }],
      '36': [{
        'cityCode': '00',
        'cityName': '海淀区44'
      }, {
        'cityCode': '01',
        'cityName': '丰台区85'
      }],
      '38': [{
        'cityCode': '00',
        'cityName': '海淀区91'
      }, {
        'cityCode': '01',
        'cityName': '丰台区73'
      }],
      '50': [{
        'cityCode': '00',
        'cityName': '海淀区27'
      }, {
        'cityCode': '01',
        'cityName': '丰台区66'
      }],
      '51': [{
        'cityCode': '00',
        'cityName': '海淀区51'
      }, {
        'cityCode': '01',
        'cityName': '丰台区94'
      }],
      '59': [{
        'cityCode': '00',
        'cityName': '海淀区55'
      }, {
        'cityCode': '01',
        'cityName': '丰台区9'
      }],
      '70': [{
        'cityCode': '00',
        'cityName': '海淀区37'
      }, {
        'cityCode': '01',
        'cityName': '丰台区77'
      }],
      '71': [{
        'cityCode': '00',
        'cityName': '海淀区76'
      }, {
        'cityCode': '01',
        'cityName': '丰台区96'
      }],
      '74': [{
        'cityCode': '00',
        'cityName': '海淀区33'
      }, {
        'cityCode': '01',
        'cityName': '丰台区56'
      }],
      '75': [{
        'cityCode': '00',
        'cityName': '海淀区24'
      }, {
        'cityCode': '01',
        'cityName': '丰台区42'
      }],
      '76': [{
        'cityCode': '00',
        'cityName': '海淀区52'
      }, {
        'cityCode': '01',
        'cityName': '丰台区56'
      }],
      '79': [{
        'cityCode': '00',
        'cityName': '海淀区10'
      }, {
        'cityCode': '01',
        'cityName': '丰台区69'
      }],
      '81': [{
        'cityCode': '00',
        'cityName': '海淀区89'
      }, {
        'cityCode': '01',
        'cityName': '丰台区59'
      }],
      '83': [{
        'cityCode': '00',
        'cityName': '海淀区11'
      }, {
        'cityCode': '01',
        'cityName': '丰台区70'
      }],
      '84': [{
        'cityCode': '00',
        'cityName': '海淀区74'
      }, {
        'cityCode': '01',
        'cityName': '丰台区76'
      }],
      '85': [{
        'cityCode': '00',
        'cityName': '海淀区89'
      }, {
        'cityCode': '01',
        'cityName': '丰台区98'
      }],
      '86': [{
        'cityCode': '00',
        'cityName': '海淀区26'
      }, {
        'cityCode': '01',
        'cityName': '丰台区24'
      }],
      '87': [{
        'cityCode': '00',
        'cityName': '海淀区44'
      }, {
        'cityCode': '01',
        'cityName': '丰台区66'
      }],
      '88': [{
        'cityCode': '00',
        'cityName': '海淀区10'
      }, {
        'cityCode': '01',
        'cityName': '丰台区22'
      }],
      '89': [{
        'cityCode': '00',
        'cityName': '海淀区98'
      }, {
        'cityCode': '01',
        'cityName': '丰台区1'
      }],
      '90': [{
        'cityCode': '00',
        'cityName': '海淀区47'
      }, {
        'cityCode': '01',
        'cityName': '丰台区81'
      }],
      '91': [{
        'cityCode': '00',
        'cityName': '海淀区17'
      }, {
        'cityCode': '01',
        'cityName': '丰台区3'
      }],
      '97': [{
        'cityCode': '00',
        'cityName': '海淀区23'
      }, {
        'cityCode': '01',
        'cityName': '丰台区38'
      }]
    }
  },
  mutations: {
    [types.SET_CITYMAP]: (state, cityMap) => {
      state.cityMap = cityMap;
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
export default cityInfo;
