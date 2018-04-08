<template>
  <f7-page>
    <f7-navbar title="系统基础信息" back-link="Back" href="/params/"></f7-navbar>
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
          {paramName : "协议版本号",  paramValue : 0, unit : ""},
          {paramName : "电池厂商号",  paramValue : 0, unit : ""},
          {paramName : "Wifi SSID",  paramValue : 0, unit : ""},
          {paramName : "Wifi password",  paramValue : 0, unit : ""}
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


<style>
.media-list span{
    display: inline-block;
    width: 64%;
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