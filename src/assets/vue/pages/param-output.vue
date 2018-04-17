<template>
  <f7-page>
    <f7-navbar title="系统输出" back-link="Back" href="/params/"></f7-navbar>
    <f7-list class="media-list">
      <f7-list-item v-for="(item, index) in datalist" :key="item.paramName" v-if="item.isshow == 1">
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
          { paramName : "PV1电压",              paramValue : 0, byte : 2, unit : "V"  , isshow : 0 },
          { paramName : "PV1电流",              paramValue : 0, byte : 2, unit : "A"  , isshow : 0 },
          { paramName : "PVI功率",              paramValue : 0, byte : 2, unit : "W"  , isshow : 0 },
          { paramName : "PV2电压",              paramValue : 0, byte : 2, unit : "V"  , isshow : 0 },
          { paramName : "PV2电流",              paramValue : 0, byte : 2, unit : "A"  , isshow : 0 },
          { paramName : "PV2功率",              paramValue : 0, byte : 2, unit : "W"  , isshow : 0 },
          { paramName : "系统有功功率",         paramValue : 0, byte : 2, unit : "VA" , isshow : 1 },
          { paramName : "系统无功功率",         paramValue : 0, byte : 2, unit : "W"  , isshow : 1 },
          { paramName : "系统视在功率",         paramValue : 0, byte : 2, unit : "Var", isshow : 1 },
          { paramName : "电网A相电流",          paramValue : 0, byte : 2, unit : "A"  , isshow : 1 },
          { paramName : "电网A相电压",          paramValue : 0, byte : 2, unit : "V"  , isshow : 1 },
          { paramName : "电网B相电流",          paramValue : 0, byte : 2, unit : "A"  , isshow : 1 },
          { paramName : "电网B相电压",          paramValue : 0, byte : 2, unit : "V"  , isshow : 1 },
          { paramName : "电网C相电流",          paramValue : 0, byte : 2, unit : "A"  , isshow : 1 },
          { paramName : "电网C相电压",          paramValue : 0, byte : 2, unit : "V"  , isshow : 1 },
          { paramName : "逆变A相电流",          paramValue : 0, byte : 2, unit : "A"  , isshow : 0 },
          { paramName : "逆变A相电压",          paramValue : 0, byte : 2, unit : "V"  , isshow : 0 },
          { paramName : "逆变B相电流",          paramValue : 0, byte : 2, unit : "A"  , isshow : 1 },
          { paramName : "逆变B相电压",          paramValue : 0, byte : 2, unit : "V"  , isshow : 1 },
          { paramName : "逆变C相电流",          paramValue : 0, byte : 2, unit : "A"  , isshow : 1 },
          { paramName : "逆变C相电压",          paramValue : 0, byte : 2, unit : "V"  , isshow : 1 },
          { paramName : "电网AB线电压",         paramValue : 0, byte : 2, unit : "V"  , isshow : 1 },
          { paramName : "电网BC线电压",         paramValue : 0, byte : 2, unit : "V"  , isshow : 1 },
          { paramName : "电网CA线电压",         paramValue : 0, byte : 2, unit : "V"  , isshow : 1 },
          { paramName : "电网频率",             paramValue : 0, byte : 2, unit : "Hz" , isshow : 1 },
          { paramName : "功率因数",             paramValue : 0, byte : 2, unit :  ""  , isshow : 1 },
          { paramName : "电池电流",             paramValue : 0, byte : 2, unit : "A"  , isshow : 0 },
          { paramName : "电池电压",             paramValue : 0, byte : 2, unit : "V"  , isshow : 0 },
          { paramName : "直流正母线电压",       paramValue : 0, byte : 2, unit : "V"  , isshow : 0 },
          { paramName : "直流负母线电压",       paramValue : 0, byte : 2, unit : "V"  , isshow : 0 },
          { paramName : "直流双边母线电压",     paramValue : 0, byte : 2, unit : "V"  , isshow : 0 },
          { paramName : "直流功率",             paramValue : 0, byte : 2, unit : "W"  , isshow : 0 },
          { paramName : "环境温度",             paramValue : 0, byte : 2, unit : "℃" , isshow : 0 },
          { paramName : "铅酸电池剩余容量",     paramValue : 0, byte : 2, unit : "%"  , isshow : 0 },
          { paramName : "铅酸电池剩余备电时间", paramValue : 0, byte : 2, unit : "Min", isshow : 0 },
          { paramName : "设备类型编码",         paramValue : 0, byte : 2, unit : ""   , isshow : 0 },
          { paramName : "软件版本号高位",       paramValue : 0, byte : 2, unit : ""   , isshow : 0 },
          { paramName : "软件版本号低位",       paramValue : 0, byte : 2, unit : ""   , isshow : 0 },
          { paramName : "并机地址",             paramValue : 0, byte : 2, unit : ""   , isshow : 0 },
          { paramName : "工作效率",             paramValue : 0, byte : 2, unit : ""   , isshow : 0 },
          { paramName : "充电次数",             paramValue : 0, byte : 2, unit : ""   , isshow : 0 },
          { paramName : "放电次数",             paramValue : 0, byte : 2, unit : ""   , isshow : 0 },
          { paramName : "模块A1 温度",          paramValue : 0, byte : 2, unit : "℃" , isshow : 0 },
          { paramName : "模块B1 温度",          paramValue : 0, byte : 2, unit : "℃" , isshow : 0 },
          { paramName : "模块C1 温度",          paramValue : 0, byte : 2, unit : "℃" , isshow : 0 }
        ]
      }
    },
    computed : {
      paramsdata : function(){
        // 从store中获取参数
        return this.$store.getters.paramsCab;  // 从getters中获取
      }
    },
    watch : {
      paramsdata : function(){
        
        this.setValueInParamList();
      }
    },
    methods : {

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