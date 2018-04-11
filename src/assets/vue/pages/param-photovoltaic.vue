<template>
  <f7-page>
    <f7-navbar title="光伏输入" back-link="Back" href="/params/"></f7-navbar>
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
          {paramName : "PV1 电压",  paramValue : 0, unit : "V"},
          {paramName : "PV1 电流",  paramValue : 0, unit : "A"},
          {paramName : "PVI 功率",  paramValue : 0, unit : "W"},
          {paramName : "PV2 电压",  paramValue : 0, unit : "V"},
          {paramName : "PV2 电流",  paramValue : 0, unit : "A"},
          {paramName : "PV2 功率",  paramValue : 0, unit : "W"},
          {paramName : "直流正母线电压",  paramValue : 0, unit : "V"},
          {paramName : "直流负母线电压",  paramValue : 0, unit : "V"},
          {paramName : "直流双边母线电压",  paramValue : 0, unit : "V"},
          {paramName : "直流功率",  paramValue : 0, unit : "W"},
        ]
      }
    },
    mounted : function(){
      // this.datalist =  this.params;
    },
    computed :{
      paramsdata : function(){
        // 从store中获取参数
        return this.$store.state.paramdatas;
      }
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