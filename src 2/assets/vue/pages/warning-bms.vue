<template>
  <f7-page>
    <f7-navbar title="BMS告警信息" back-link="返回" href="/params/"></f7-navbar>
    <f7-list class="media-list">
      <f7-list-item v-for="(item, index) in datalist" :key="item.paramName">
        <span>{{item.paramName}}</span>
        <span class="params">{{gitstatusname(item.paramValue)}}</span>
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
          { paramName : "电池放电电流过高",  paramValue : 0, unit : "", isshow : 1},
          { paramName : "电池充电电流过高",  paramValue : 0, unit : "", isshow : 1},
          { paramName : "电池温度过低",      paramValue : 0, unit : "", isshow : 1},
          { paramName : "电池温度过高",      paramValue : 0, unit : "", isshow : 1},
          { paramName : "电池电压过低",      paramValue : 0, unit : "", isshow : 1},
          { paramName : "电池电压过高",      paramValue : 0, unit : "", isshow : 1},
        ]
      }
    },

    computed : {
      paramsdata : function(){
        // 从store中获取参数
        return this.$store.getters.warningBMS;  // 从getters中获取
      }
    },

    watch : {
      paramsdata : function(){
        
        this.setValueInParamList();
      }
    },
    methods : {
      gitstatusname : function(num){
        return num == 1 ? "异常" : "正常"
      },
      setValueInParamList : function(){

        if(this.paramsdata.length > 0){

          for(var i = 0; i < this.datalist.length; i++){

              if(this.datalist[i].isshow == 1){

                for(var j = 0; j < this.paramsdata.length; j++){
                  if(this.paramsdata[j].paramName == this.datalist[i].paramName){
                    this.datalist[i].paramValue = this.paramsdata[j].paramValue;
                    continue;
                  }
                }
              }
          }
        }
      }
    },
    mounted : function(){
      this.setValueInParamList();
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
    width: 76%;
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
   .media-list span.params{
    width: 20%;
    display: inline-block;
    line-height: 30px;
  }
  .list li:nth-child(2n-1){
    background-color: #fbfbfb;
  }
  .list li:nth-child(2n){
    background-color: #fff;
  }
</style>