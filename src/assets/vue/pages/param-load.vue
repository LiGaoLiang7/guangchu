<template>
  <f7-page>
    <f7-navbar title="系统负载" back-link="Back" href="/params/"></f7-navbar>
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
      params : {
        type : Array,
        default : function(){
          return []
        }
      }
    },
    data : function(){
      return {
        datalist : [
          {paramName : "PV1 电压",  paramValue : 0, unit : "V"},
          {paramName : "PV1 电流",  paramValue : 0, unit : "A"},
          {paramName : "PVI 功率",  paramValue : 0, unit : "W"},
          {paramName : "PV2 电压",  paramValue : 0, unit : "V"},
          {paramName : "PV2 功率",  paramValue : 0, unit : "W"},
          
          {paramName : "逆变 A 相电压",  paramValue : 0, unit : "V"},
          {paramName : "逆变 A 相电流",  paramValue : 0, unit : "A"},
          {paramName : "逆变 B 相电压",  paramValue : 0, unit : "V"},
          {paramName : "逆变 B 相电流",  paramValue : 0, unit : "A"},
          {paramName : "逆变 C 相电压",  paramValue : 0, unit : "V"},
          {paramName : "逆变 C 相电流",  paramValue : 0, unit : "A"},

          {paramName : "电网频率",  paramValue : 0, unit : "Hz"},
          {paramName : "系统有功功率",  paramValue : 0, unit : "VA"},
          {paramName : "系统无功功率",  paramValue : 0, unit : "W"},
          {paramName : "电池电流",  paramValue : 0, unit : "A"},
          {paramName : "电池电压",  paramValue : 0, unit : "V"},
          {paramName : "铅酸电池剩余容量",  paramValue : 0, unit : "%"},
          {paramName : "软件版本号高位",  paramValue : 0, unit : ""},
          {paramName : "软件版本号低位",  paramValue : 0, unit : ""},
          {paramName : "充电次数",  paramValue : 0, unit : ""},
          {paramName : "放电次数",  paramValue : 0, unit : ""},
        ]
      }
    },
    mounted : function(){
      // this.datalist =  this.params;
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
    width: 70%;
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