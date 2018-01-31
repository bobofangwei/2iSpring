<template>
<a ref="link" class="download-btn" v-on:click="handleClick2">导出</a>
</template>
<script type="text/javascript">
import jsonExportToCsv from '@/util/jsonExportToCsv.js';

export default {
  props: {
    header: {
      type: Array,
      default: function() {
        return [];
      }
    },
    data: {
      type: Array,
      default: function() {
        return [];
      }
    },
    fileName: {
      type: String,
      default: 'data'
    }
  },
  methods: {
    handleClick2() {
      jsonExportToCsv({
        data: this.data,
        fileName: this.fileName,
        showLabel: true,
        columns: {
          title: this.headerLabelArr,
          key: this.headerProp
        }
      });
    }
    // handleClick: function() {
    //   if (!this.data || this.data.length <= 0) {
    //     this.$message({
    //       message: '请先进行查询,并等待查询结果返回!',
    //       type: 'error'
    //     });
    //     return;
    //   }
    //   // 加上/ufeff是为了使得excel以utf-8的编码模式，同时也是为了解决中文乱码问题
    //   var csvContent = 'data:text/csv;charset=utf-8,\ufeff';
    //   csvContent += this.headerLabel + '\r\n';
    //   this.data.forEach((item, index) => {
    //     let dataString = '';
    //     for (let i = 0; i < this.headerProp.length; i++) {
    //       dataString += item[this.headerProp[i]] + ',';
    //     }
    //     csvContent += index < this.data.length ? dataString.replace(/,$/, '\r\n') : dataString.replace(/,$/, '');
    //   });
    //   this.$refs.link.setAttribute('href', encodeURI(csvContent));
    //   this.$refs.link.setAttribute('download', this.fileName);
    // }
  },
  computed: {
    // 要求head是数组，数组中的每个元素是对象，并且每个对象都有label属性
    // headerLabel: function() {
    //   let result;
    //   result = this.header.map((item) => {
    //     return item.label;
    //   })
    //   result = result.join(',');
    //   return result;
    // },
    headerProp: function() {
      let result;
      result = this.header.map((item) => {
        return item.prop;
      })
      return result;
    },
    headerLabelArr: function() {
      let result;
      result = this.header.map((item) => {
        return item.label;
      })
      return result;
    }
  }
}
</script>
<style lang="scss" scoped>
.download-btn {
    display: inline-block;
    margin-left: 10px;
    padding: 2px 15px;
    font-size: 12px;
    border-radius: 4px;
    color: #FFF;
    background-color: #f7ba2a;
    border-color: #f7ba2a;
    outline: 0;
    text-align: center;
    -webkit-appearence: none;
    appearence: none;
    cursor: pointer;
}
</style>
