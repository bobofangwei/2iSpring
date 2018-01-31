<template lang="html">
<div class="search">
  <!--<div class="header">中国联通2I2C用户春节回乡信息查询</div>-->
  <my-header></my-header>
  <div class="content">
  <el-form :inline="true" :model="searchForm" :class="[firstEnter?'form-center':'','searchForm']" ref="searchForm" :rules="rules">
      <el-form-item class="province-item" prop="selectedProvince">
        <el-select v-model="searchForm.selectedProvince" placeholder="省份">
          <el-option v-for="item in provinceArr" :label="item.provinceName" :value="item.provinceCode"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
       <el-input clearable class="addressInput" v-model="searchForm.detailAddress" placeholder="多个地址关键词请使用空格隔开"></el-input>
    </el-form-item>
      <el-form-item class="btn-group">
       <el-button type="primary" @click="onSubmit">查询</el-button>
       <download-btn :header="tableHeader" :data="tableData" v-show="tableData&&tableData.length>0">导出</download-btn>
    </el-form-item>
  </el-form>
  <div class="result-wrapper"  v-if="!firstEnter">
      <p class="result-desc" v-show="tableLoading===false">符合本次查询条件的结果共有{{totalNum}}条，本次为您显示{{tableData&&tableData.length}}条</p>
  <el-table :data="tableData" border :max-height="tableHeight" :empty-text="tableEmptyMsg" v-loading="tableLoading">
    <el-table-column v-for="item in tableHeader"
      :prop="item.prop"
      :label="item.label"
      :key="item.prop">
    </el-table-column>
  </el-table>
  <!--<el-pagination class="pager"   background   layout="prev, pager, next"   :total="1000"></el-pagination>-->
  </div>
  </div>
</div>
</template>

<script>
import {
  mapGetters
} from 'vuex';
import downloadBtn from '@/components/common/downloadBtn/downloadBtn.vue';
import myHeader from '@/components/common/header/header.vue';
import {
  searchAddress
} from '@/api/search.js';
export default {
  computed: {
    ...mapGetters([
      'provinceArr',
      'cityMap'
    ])
  },
  components: {
    downloadBtn,
    myHeader
  },
  data() {
    return {
      searchForm: {
        selectedProvince: '',
        detailAddress: ''
      },
      firstEnter: true,
      totalNum: 100,
      cityCache: {},
      cityArr: [],
      rules: {
        selectedProvince: [{
          required: true,
          message: '请选择省份',
          trigger: 'change'
        }]
      },
      tableHeader: [{
          prop: 'phonenum',
          label: '手机号'
        },
        {
          prop: 'province',
          label: '省份'
        },
        {
          prop: 'address',
          label: '详细地址'
        },
        {
          prop: 'phoneprovince',
          label: '号码归属省份'
        },
        {
          prop: 'phonecity',
          label: '号码归属地市'
        },

        {
          prop: 'dou',
          label: '12月DOU(M)'
        },
        {
          prop: 'opentime',
          label: '入网日期'
        },
        {
          prop: 'product',
          label: '产品名称'
        }
      ],
      tableData: null,
      tableHeight: 550,
      tableEmptyMsg: '对不起，您输入的查询条件无查询结果,请更换条件重新查询...',
      tableLoading: false
    };
  },
  created() {
    // this.dealProvince();
    // this.dealData();
    // this.fillTableData();
  },
  mounted() {
    this.resizeHandler();
    window.addEventListener('resize', this.resizeHandler);
  },
  methods: {
    resizeHandler() {
      // 浏览器打下发生变化的时候调用
      let windowHeight = window.innerHeight;
      this.tableHeight = windowHeight - 300;
    },
    onSubmit() {
      // console.log('submit', JSON.stringify(this.searchForm));
      this.$refs['searchForm'].validate((valid) => {
        if (!valid) {
          return;
        }
        if (this.firstEnter) {
          this.firstEnter = false;
        }
        // this.tableData = [];
        this.tableEmptyMsg = '';
        this.tableLoading = true;
        searchAddress(this.searchForm).then(res => {
          this.tableLoading = false;
          this.totalNum = res.totalNum;
          this.tableData = res.data;
          // console.log('查询返回数据', res);
          if (this.totalNum == '0') {
            this.tableEmptyMsg = '对不起，您输入的查询条件无查询结果,请更换条件重新查询...';
          }
        }).catch((err) => {
          this.tableEmptyMsg = err.msg;
        });
      });
      // this.fillTableData();
    },
    fillTableData() {
      let ret = [];
      for (let i = 0; i < 1000; i++) {
        ret.push({
          phonenum: '186xxxx987',
          product: '腾讯王卡',
          phoneProvince: '北京',
          phoneCity: '海淀',
          province: '河南',
          address: 'xxx社区xxx',
          dou: '1453',
          openTime: '2016-10-01'
        });
      }
      // console.log('tableData', JSON.stringify(ret));
      this.tableData = ret;
    }
  }

}
</script>

<style lang="scss">
@import "../../../common/scss/colors.scss";
.search {
    .header {
        width: 100%;
        height: 80px;
        line-height: 80px;
        padding-left: 60px;
        font-size: 28px;
        color: $dark-white;
        background-color: $light-black;
    }
    .content {
        width: 80%;
        margin: 0 auto;
        padding-top: 30px;
        .searchForm {
            text-align: center;
            .el-input__inner {
                height: 46px;
            }
        }
        .result-desc {
            height: 30px;
            vertical-align: top;
            font-size: 14px;
        }
        .form-center {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            width: 100%;
        }
        .province-item {
            max-width: 180px;
            margin-right: 0;
        }
        .addressInput {
            min-width: 600px;
        }
        .flowInput {
            max-width: 200px;
        }
        .btn-group {
            margin-left: 30px;
        }
        .pager {
            margin-top: 20px;
            float: right;
        }
    }
}
</style>
