<template>
  <f7-page>
    <f7-navbar title="系统输出" back-link="Back" href="/params/"></f7-navbar>
    <f7-list class="media-list">
      <f7-list-item v-for="(item, index) in datalist" :key="item.paramName">
        <span>{{item.paramName}}</span>
        <input type="text" class="params" v-model="item.paramValue" disabled>
        <em class="unit">{{item.unit}}</em>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
import { f7Navbar, f7Page, f7BlockTitle } from 'framework7-vue';
  export default {
    props : {
    },
    data : function(){
      return {
        datalist : [
          {paramName : "电网 A 相电压",  paramValue : 0, unit : "V"},
          {paramName : "电网 AB 线电压",  paramValue : 0, unit : "V"},
          {paramName : "电网 A 相电流",  paramValue : 0, unit : "A"},
          {paramName : "逆变 B 相电压",  paramValue : 0, unit : "V"},
          {paramName : "逆变 B 相电流",  paramValue : 0, unit : "A"},
          {paramName : "电网 B 相电压",  paramValue : 0, unit : "V"},
          {paramName : "电网 BC 线电压",  paramValue : 0, unit : "V"},
          {paramName : "电网 B 相电流",  paramValue : 0, unit : "A"},
          {paramName : "逆变 C 相电压",  paramValue : 0, unit : "V"},
          {paramName : "逆变 C 相电流",  paramValue : 0, unit : "A"},
          {paramName : "电网 C 相电压",  paramValue : 0, unit : "V"},
          {paramName : "电网 CA 线电压",  paramValue : 0, unit : "V"},
          {paramName : "电网 C 相电流",  paramValue : 0, unit : "V"},
          {paramName : "电网频率",  paramValue : 0, unit : "Hz"},
          {paramName : "功率因数",  paramValue : 0, unit : ""},
          {paramName : "系统有功功率",  paramValue : 0, unit : "VA"},
          {paramName : "系统无功功率",  paramValue : 0, unit : "W"},
          {paramName : "系统视在功率",  paramValue : 0, unit : "Var"},
        ]
      }
    },
    computed : {
      paramsdata : function(){
        // 从store中获取参数
        return this.$store.state.paramdatas;
      }
    },
    mounted : function(){
      // this.datalist =  this.params;
    },
    watch : {
      paramsdata : function(){
        this.datalist = this.paramsdata;
      }
    },
    components: {
      f7Navbar,
      f7Page,
      f7BlockTitle
    },
  };
</script>


<style scoped>
.media-list span{
    display: inline-block;
    width: 69%;
    text-align: left;
  }
  .media-list .params{
    display: inline;
    text-align: center;
    border: 1px solid #e2e2e2;
    height: 30px !important;
    border-radius: 9px;
    width: 20% !important;
  }
</style>