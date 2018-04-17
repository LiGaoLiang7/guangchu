<template>
  <f7-page>
    <f7-navbar title="系统故障状态" back-link="Back" href="/params/"></f7-navbar>
    <f7-list class="media-list">
      <f7-list-item title="故障状态字1"></f7-list-item>
      <f7-list-item v-for="(item, index) in datalist" :key="item.paramName" v-if="item.isshow == 1 && index < 16">
        <span>{{item.paramName}}</span>
        <span class="params">{{gitstatusname(item.paramValue)}}</span>
        <em class="unit">{{item.unit}}</em>
      </f7-list-item>


      <f7-list-item title="故障状态字2"></f7-list-item>
      <f7-list-item v-for="(item, index) in datalist" :key="item.paramName" v-if="item.isshow == 1 && index > 15 && index < 32">
        <span>{{item.paramName}}</span>
        <span class="params">{{gitstatusname(item.paramValue)}}</span>
        <em class="unit">{{item.unit}}</em>
      </f7-list-item>


      <f7-list-item title="故障状态字3"></f7-list-item>
      <f7-list-item v-for="(item, index) in datalist" :key="item.paramName" v-if="item.isshow == 1 && index > 31">
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
          // 故障状态字1 bit15 -bit0
          { paramName : "逆变器故障",               paramValue : 0, unit : "", isshow : 1},
          { paramName : "逆变软启故障",             paramValue : 0, unit : "", isshow : 1},
          { paramName : "逆变欠压",                 paramValue : 0, unit : "", isshow : 1},
          { paramName : "逆变过压",                 paramValue : 0, unit : "", isshow : 1},
          { paramName : "电网谐振关机",             paramValue : 0, unit : "", isshow : 1},
          { paramName : "电网直流分量高 ",          paramValue : 0, unit : "", isshow : 1},
          { paramName : "电网频率低",               paramValue : 0, unit : "", isshow : 1},
          { paramName : "电网频率高",               paramValue : 0, unit : "", isshow : 1},
          { paramName : "电网电压低",               paramValue : 0, unit : "", isshow : 1},
          { paramName : "电网电压高",               paramValue : 0, unit : "", isshow : 1},
          { paramName : "电网相序异常",             paramValue : 0, unit : "", isshow : 1},
          { paramName : "电网锁相失败",             paramValue : 0, unit : "", isshow : 1},
          { paramName : "三相电流不平衡 ",          paramValue : 0, unit : "", isshow : 1},
          { paramName : "交流输出短路 ",            paramValue : 0, unit : "", isshow : 1},
          { paramName : "输出漏电流故障",           paramValue : 0, unit : "", isshow : 1},
          { paramName : "输出过载（离网和backup）", paramValue : 0, unit : "", isshow : 1},

          // 故障状态字2 bit15 -bit0
          { paramName : "PV2绝缘阻抗告警",          paramValue : 0, unit : "", isshow : 1},
          { paramName : "PV1绝缘阻抗告警",          paramValue : 0, unit : "", isshow : 1},
          { paramName : "PV2欠压",                  paramValue : 0, unit : "", isshow : 1},
          { paramName : "PV2过压",                  paramValue : 0, unit : "", isshow : 1},
          { paramName : "PV1欠压",                  paramValue : 0, unit : "", isshow : 1},
          { paramName : "PV1过压",                  paramValue : 0, unit : "", isshow : 1},
          { paramName : "PV2反接",                  paramValue : 0, unit : "", isshow : 1},
          { paramName : "PV1反接",                  paramValue : 0, unit : "", isshow : 1},
          { paramName : "二级母线过高",             paramValue : 0, unit : "", isshow : 1},
          { paramName : "二级母线过低",             paramValue : 0, unit : "", isshow : 1},
          { paramName : "母线软件软起故障",         paramValue : 0, unit : "", isshow : 1},
          { paramName : "母线硬件软起故障",         paramValue : 0, unit : "", isshow : 1},
          { paramName : "直流母线电容上电压过压",   paramValue : 0, unit : "", isshow : 1},
          { paramName : "直流母线电容下电压过压",   paramValue : 0, unit : "", isshow : 1},
          { paramName : "直流母线电压不均衡",       paramValue : 0, unit : "", isshow : 1},
          { paramName : "直流母线电压异常",         paramValue : 0, unit : "", isshow : 1},

          // 故障状态字3 bit15 -bit0
          { paramName : "预留",                     paramValue : 0, unit : "", isshow : 1},
          { paramName : "产品未被授权",             paramValue : 0, unit : "", isshow : 1},
          { paramName : "低穿故障",                 paramValue : 0, unit : "", isshow : 1},
          { paramName : "辅助电源故障",             paramValue : 0, unit : "", isshow : 1},
          { paramName : "并网过流（单相）",         paramValue : 0, unit : "", isshow : 1},
          { paramName : "并机主机冲突",             paramValue : 0, unit : "", isshow : 1},
          { paramName : "并机地址超限",             paramValue : 0, unit : "", isshow : 1},
          { paramName : "并机线故障",               paramValue : 0, unit : "", isshow : 1},
          { paramName : "环境过温",                 paramValue : 0, unit : "", isshow : 1},
          { paramName : "散热器3过热",              paramValue : 0, unit : "", isshow : 1},
          { paramName : "散热器2过热",              paramValue : 0, unit : "", isshow : 1},
          { paramName : "散热器1过热",              paramValue : 0, unit : "", isshow : 1},
          { paramName : "充电器故障",               paramValue : 0, unit : "", isshow : 1},
          { paramName : "电池反接",                 paramValue : 0, unit : "", isshow : 1},
          { paramName : "电池过压",                 paramValue : 0, unit : "", isshow : 1},
          { paramName : "电池欠压（EOD）",          paramValue : 0, unit : "", isshow : 1},

          // 故障状态字4 bit15 -bit0
          { paramName : "预留",                     paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",                     paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",                     paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",                     paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",                     paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",                     paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",                     paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",                     paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",                     paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",                     paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",                     paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",                     paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",                     paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",                     paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",                     paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",                     paramValue : 0, unit : "", isshow : 0},

        ]
      }
    },
    computed : {
      paramsdata : function(){
        // 从store中获取参数
        return this.$store.getters.warningSysBinary;  // 从getters中获取
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
      // 将字符串二进制数据设置到datalist中
      setValueInParamList:  function(){
        if(this.paramsdata.length > 0) {
          for(var i = 0; i < this.paramsdata.length; i++){
            var binArray = this.paramsdata[i].split('');
            for(var j = 0; j < binArray.length; j++){
                this.datalist[i*16+j].paramValue = binArray[j];
             }
          }
        }
        
      },
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
    width: 77%;
    text-align: left;
  }
  .media-list .params{
    display: inline;
    text-align: center;
    border: 1px solid #e2e2e2;
    height: 30px !important;
    border-radius: 6px;
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