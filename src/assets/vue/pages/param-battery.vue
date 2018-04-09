<template>
  <f7-page>
    <f7-navbar title="电池信息" back-link="Back" href="/params/"></f7-navbar>
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
          {paramName : "电池电压",  paramValue : 0, unit : "V"},
          {paramName : "电池电流",  paramValue : 0, unit : "A"},
          {paramName : "温度",  paramValue : 0, unit : "℃"},
          {paramName : "SOC",  paramValue : 0, unit : "%"},
          {paramName : "SOH",  paramValue : 0, unit : "%"},
          {paramName : "充放电状态",  paramValue : 0, unit : ""},
          // 0x11 充电 0x22 放电 0x33 待机
        ]
      }
    },
    computed : {
      paramsdata : function(){
        // 从store中获取参数
        return this.$store.state.paramdatas;
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