<template>
  <f7-page>
    <f7-navbar title="系统故障状态" back-link="Back" href="/params/"></f7-navbar>
    <f7-list class="media-list">
      <!-- <f7-list-item title="故障状态字1"></f7-list-item> -->
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
          // 故障状态字1 bit15 -bit0
          {paramName : "预留2",  paramValue : 1, unit : ""},
          {paramName : "预留1",  paramValue : 0, unit : ""},
          {paramName : "充电器故障",    paramValue : 0, unit : ""},
          {paramName : "环境过温",    paramValue : 0, unit : ""},
          {paramName : "电网锁相失败",    paramValue : 0, unit : ""},
          {paramName : "电网直流分量高 ",    paramValue : 0, unit : ""},
          {paramName : "电网电压过低 ",    paramValue : 0, unit : ""},
          {paramName : "电网电压过高 ",    paramValue : 0, unit : ""},
          {paramName : "电网频率过低 ",    paramValue : 0, unit : ""},
          {paramName : "电网频率过高 ",    paramValue : 0, unit : ""},
          {paramName : "相序异常",    paramValue : 0, unit : ""},
          {paramName : "输出漏电流故障 ",    paramValue : 0, unit : ""},
          {paramName : "PV2 绝缘阻抗保护 ",    paramValue : 0, unit : ""},
          {paramName : "PV2 绝缘阻抗告警 ",    paramValue : 0, unit : ""},
          {paramName : "PV1 绝缘阻抗保护 ",    paramValue : 0, unit : ""},
          {paramName : "PV1 绝缘阻抗告警 ",    paramValue : 0, unit : ""},

          // 故障状态字2 bit15 -bit0
          {paramName : "内部通讯故障",  paramValue : 1, unit : ""},
          {paramName : "逆变欠压",  paramValue : 0, unit : ""},
          {paramName : "交流输出短路",    paramValue : 0, unit : ""},
          {paramName : "输出过载",    paramValue : 0, unit : ""},
          {paramName : "逆变过压",    paramValue : 0, unit : ""},
          {paramName : "输出过流故障",    paramValue : 0, unit : ""},
          {paramName : "PV2 起机电压异常",    paramValue : 0, unit : ""},
          {paramName : "PV1 起机电压异常",    paramValue : 0, unit : ""},
          {paramName : "PV2 运行电压异常",    paramValue : 0, unit : ""},
          {paramName : "PV1 运行电压异常",    paramValue : 0, unit : ""},
          {paramName : "PV2 运行功率异常",    paramValue : 0, unit : ""},
          {paramName : "PV1 运行功率异常",    paramValue : 0, unit : ""},
          {paramName : "IGBT 模块温度过热",    paramValue : 0, unit : ""},
          {paramName : "环境温度过热",    paramValue : 0, unit : ""},
          {paramName : "逆变软启故障",    paramValue : 0, unit : ""},
          {paramName : "PV反接",    paramValue : 0, unit : ""},

          // 故障状态字3 bit15 -bit0
          {paramName : "辅助电源故障",  paramValue : 1, unit : ""},
          {paramName : "低穿故障",  paramValue : 0, unit : ""},
          {paramName : "并机地址冲突",    paramValue : 0, unit : ""},
          {paramName : "并机地址超限",    paramValue : 0, unit : ""},
          {paramName : "并机线故障",    paramValue : 0, unit : ""},
          {paramName : "并机主机冲突",    paramValue : 0, unit : ""},
          {paramName : "母线软起故障",    paramValue : 0, unit : ""},
          {paramName : "电池过压",    paramValue : 0, unit : ""},
          {paramName : "电池欠压(EOD)",    paramValue : 0, unit : ""},
          {paramName : "电池过流",    paramValue : 0, unit : ""},
          {paramName : "直流母线短路",    paramValue : 0, unit : ""},
          {paramName : "直流母线电容上电压过压",    paramValue : 0, unit : ""},
          {paramName : "直流母线电容下电压过压",    paramValue : 0, unit : ""},
          {paramName : "直流母线电压不均衡",    paramValue : 0, unit : ""},
          {paramName : "直流母线电压异常",    paramValue : 0, unit : ""},
          {paramName : "电池反接反接",    paramValue : 0, unit : ""},
        ]
      }
    },
    methods : {
      gitstatusname : function(num){
        return num == 1 ? "异常" : "正常"
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
    width: 77%;
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
</style>