<template>
  <f7-page>
    <f7-navbar :title="$t('app.waringpage.System_fault_status')" :back-link="$t('app.modal.back')"  href="/warning/"></f7-navbar>
    <f7-list class="media-list" style="width:96%;margin: 10px auto;border-radius:10px;overflow: hidden;">
      <!-- <f7-list-item title="故障状态字1"></f7-list-item> -->
      <f7-list-item v-for="(item) in datalist" :key="item.paramName" v-if="item.isshow == 1 && item.group == 1" class="bg_1">
        <span>{{$t('app.syswarning.' + item.key)}}</span>
        <span v-if="deactive"  class="params active"> </span>
        <span v-if="!deactive" class="params" :class="{'red' : item.paramValue == 1}">{{$t('app.modal.'+gitstatusname(item.paramValue))}}</span>
        <em class="unit">{{item.unit}}</em>
      </f7-list-item>
    </f7-list>
    <f7-list class="media-list" style="width:96%;margin: 10px auto;border-radius:10px;overflow: hidden;">
      <!-- <f7-list-item title="故障状态字2"></f7-list-item> -->
      <f7-list-item v-for="(item) in datalist" :key="item.paramName" v-if="item.isshow == 1 && item.group == 2" class="bg_2">
        <span>{{$t('app.syswarning.' + item.key)}}</span>
        <span v-if="deactive"  class="params active"> </span>
        <span v-if="!deactive" class="params" :class="{'red' : item.paramValue == 1}">{{$t('app.modal.'+gitstatusname(item.paramValue))}}</span>
        <em class="unit">{{item.unit}}</em>
      </f7-list-item>
    </f7-list>
    <f7-list class="media-list" style="width:96%;margin: 10px auto;border-radius:10px;overflow: hidden;">
      <!-- <f7-list-item title="故障状态字3"></f7-list-item> -->
      <f7-list-item v-for="(item) in datalist" :key="item.paramName" v-if="item.isshow == 1 && item.group == 3" class="bg_3">
        <span>{{$t('app.syswarning.' + item.key)}}</span>
        <span v-if="deactive"  class="params active"> </span>
        <span v-if="!deactive" class="params" :class="{'red' : item.paramValue == 1}">{{$t('app.modal.'+gitstatusname(item.paramValue))}}</span>
        <em class="unit">{{item.unit}}</em>
      </f7-list-item>
    </f7-list>
    <f7-list class="media-list" style="width:96%;margin: 10px auto;border-radius:10px;overflow: hidden;">
      <!-- <f7-list-item title="故障状态字4"></f7-list-item> -->
      <f7-list-item v-for="(item) in datalist" :key="item.paramName" v-if="item.isshow == 1 && item.group == 4" class="bg_4">
        <span>{{$t('app.syswarning.' + item.key)}}</span>
        <span v-if="deactive"  class="params active"> </span>
        <span v-if="!deactive" class="params" :class="{'red' : item.paramValue == 1}">{{$t('app.modal.'+gitstatusname(item.paramValue))}}</span>
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
        deactive: true,
        datalist : [
          // 故障状态字1 bit15 -bit0
          { paramName : "逆变器故障",              group:1,  key:"Inverter_failure",                      paramValue : 0, unit : "", isshow : 1},
          { paramName : "逆变软启故障",            group:1,  key:"Inverter_soft_start_failure",           paramValue : 0, unit : "", isshow : 1},
          { paramName : "逆变欠压",                group:1,  key:"Inverter_undervoltage",                 paramValue : 0, unit : "", isshow : 1},
          { paramName : "逆变过压",                group:1,  key:"Inversion_overvoltage",                 paramValue : 0, unit : "", isshow : 1},
          { paramName : "电网谐振关机",            group:1,  key:"Grid_resonance_shutdown",               paramValue : 0, unit : "", isshow : 1},
          { paramName : "电网直流分量高 ",          group:1, key:"The_high_DC_component_of_the_grid",     paramValue : 0, unit : "", isshow : 1},
          { paramName : "电网频率低",              group:1,  key:"Low_grid_frequency",                    paramValue : 0, unit : "", isshow : 1},
          { paramName : "电网频率高",              group:1,  key:"High_frequency_grid",                   paramValue : 0, unit : "", isshow : 1},
          { paramName : "电网电压低",              group:1,  key:"Low_grid_voltage",                      paramValue : 0, unit : "", isshow : 1},
          { paramName : "电网电压高",              group:1,  key:"High_grid_voltage",                     paramValue : 0, unit : "", isshow : 1},
          { paramName : "电网相序异常",            group:1,  key:"Abnormal_phase_sequence_of_power_grid", paramValue : 0, unit : "", isshow : 1},
          { paramName : "电网锁相失败",             group:1, key:"Grid_locking_failed",                   paramValue : 0, unit : "", isshow : 1},
          { paramName : "三相电流不平衡",           group:1, key:"Three_phase_current_imbalance",         paramValue : 0, unit : "", isshow : 1},
          { paramName : "交流输出短路",            group:1,  key:"AC_output_short_circuit",               paramValue : 0, unit : "", isshow : 1},
          { paramName : "输出漏电流故障",          group:1,  key:"Output_leakage_current_failure",        paramValue : 0, unit : "", isshow : 1},
          { paramName : "输出过载(离网和backup)",  group:1,  key:"Output_overload",                       paramValue : 0, unit : "", isshow : 1},
          // 故障状态字2 bit15 -bit0
          { paramName : "PV2绝缘阻抗告警",       group:2,    key:"PV2_insulation_impedance_alarm",        paramValue : 0, unit : "", isshow : 1},
          { paramName : "PV1绝缘阻抗告警",       group:2,    key:"PV1_insulation_impedance_alarm",        paramValue : 0, unit : "", isshow : 1},
          { paramName : "PV2欠压",                group:2,   key:"PV2_undervoltage",                      paramValue : 0, unit : "", isshow : 1},
          { paramName : "PV2过压",                group:2,   key:"PV2_overvoltage",                       paramValue : 0, unit : "", isshow : 1},
          { paramName : "PV1欠压",                group:2,   key:"PV1_undervoltage",                      paramValue : 0, unit : "", isshow : 1},
          { paramName : "PV1过压",                group:2,   key:"PV1_overvoltage",                       paramValue : 0, unit : "", isshow : 1},
          { paramName : "PV2反接",                group:2,   key:"Reverse_PV2",                           paramValue : 0, unit : "", isshow : 1},
          { paramName : "PV1反接",                group:2,   key:"PV1_reverse_connection",                paramValue : 0, unit : "", isshow : 1},
          { paramName : "二级母线过高",            group:2,  key:"Secondary_bus_is_too_high",             paramValue : 0, unit : "", isshow : 1},
          { paramName : "二级母线过低",            group:2,  key:"Secondary_bus_is_too_low",              paramValue : 0, unit : "", isshow : 1},
          { paramName : "母线软件软起故障",        group:2,  key:"Bus_software_soft_fault",               paramValue : 0, unit : "", isshow : 1},
          { paramName : "母线硬件软起故障",        group:2,  key:"Bus_hardware_fault",                    paramValue : 0, unit : "", isshow : 1},
          { paramName : "直流母线电容上电压过压",   group:2,  key:"DC_bus_capacitor_overvoltage",          paramValue : 0, unit : "", isshow : 1},
          { paramName : "直流母线电容下电压过压",   group:2,  key:"DC_bus_capacitance_overvoltage",        paramValue : 0, unit : "", isshow : 1},
          { paramName : "直流母线电压不均衡",      group:2,  key:"DC_bus_voltage_imbalance",              paramValue : 0, unit : "", isshow : 1},
          { paramName : "直流母线电压异常",        group:2,  key:"Abnormal_DC_bus_voltage",               paramValue : 0, unit : "", isshow : 1},
          // 故障状态字3
          { paramName : "电网等级设置错误",        group:3,   key:"Reserve",                               paramValue : 0, unit : "", isshow : 1},
          { paramName : "产品未被授权",            group:3,  key:"Product_is_not_authorized",             paramValue : 0, unit : "", isshow : 1},
          { paramName : "低穿故障",               group:3,   key:"Low_wear_failure",                      paramValue : 0, unit : "", isshow : 1},
          { paramName : "辅助电源故障",            group:3,  key:"Auxiliary_power_failure",               paramValue : 0, unit : "", isshow : 1},
          { paramName : "并网过流(单相)",          group:3,  key:"On_grid_over_current_single_phase",     paramValue : 0, unit : "", isshow : 1},
          { paramName : "并机主机冲突",            group:3,  key:"Parallel_host_conflicts",               paramValue : 0, unit : "", isshow : 1},
          { paramName : "并机地址超限",            group:3,  key:"Parallel_address_limit",                paramValue : 0, unit : "", isshow : 1},
          { paramName : "并机线故障",              group:3,  key:"Parallel_line_failure",                 paramValue : 0, unit : "", isshow : 1},
          { paramName : "环境过温",                group:3,  key:"Over_temperature",                      paramValue : 0, unit : "", isshow : 1},
          { paramName : "散热器3过热",             group:3,  key:"Heatsink_3_overheated",                       paramValue : 0, unit : "", isshow : 1},
          { paramName : "散热器2过热",             group:3,  key:"Heatsink_2_overheated",                       paramValue : 0, unit : "", isshow : 1},
          { paramName : "散热器1过热",             group:3,  key:"Heatsink_1_overheated",                   paramValue : 0, unit : "", isshow : 1},
          { paramName : "充电器故障",              group:3,  key:"Charger_failure",                       paramValue : 0, unit : "", isshow : 1},
          { paramName : "电池反接",                group:3,  key:"Reverse_battery",                       paramValue : 0, unit : "", isshow : 1},
          { paramName : "电池过压",                group:3,  key:"Battery_overvoltage",                   paramValue : 0, unit : "", isshow : 1},
          { paramName : "电池欠压（EOD）",          group:3, key:"Battery_under_voltage",                 paramValue : 0, unit : "", isshow : 1},

          // 故障状态字4 bit15 -bit0
          { paramName : "预留",   group:4,     key:"", paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",   group:4,     key:"", paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",   group:4,     key:"", paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",   group:4,     key:"", paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",   group:4,     key:"", paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",   group:4,     key:"", paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",   group:4,     key:"", paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",   group:4,     key:"", paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",   group:4,     key:"", paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",   group:4,     key:"", paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",   group:4,     key:"", paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",   group:4,     key:"", paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",   group:4,     key:"", paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",   group:4,     key:"", paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",   group:4,     key:"", paramValue : 0, unit : "", isshow : 0},
          { paramName : "总位",   group:4,     key:"", paramValue : 0, unit : "", isshow : 0}
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
          // alert("系统告警："+JSON.stringify(this.paramsdata, "-", 4));
        this.setValueInParamList();
        this.deactive = false;
      }
    },
    methods : {
      gitstatusname : function(num){
        return num == 1 ? "abnormal" : "normal"
      },
      // 将字符串二进制数据设置到datalist中
      setValueInParamList:  function(){
        if(this.paramsdata.length > 0) {
          for(var i = 0; i < this.paramsdata.length; i++){
            var binArray = this.paramsdata[i].split('');
            for(var j = 0; j < binArray.length; j++){
                this.datalist[ i*16 + j].paramValue = binArray[j];
            }
          }
        }
        // 排序 有告警的放在前边
        this.datalist.sort(this.compare);
        // alert("系统故障"+JSON.stringify(this.datalist, "-", 4));
      },
      // 有告警的放在前边
      compare : function(value1, value2){
        if(value1.paramValue < value2.paramValue){
          return 1;
        }else if(value1.paramValue > value2.paramValue){
          return -1;
        }else{
          return 0;
        }
      }
    },
    mounted : function(){
      this.$store.commit('TAB_INDEX_CHANGE', 3);
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
    float: left;
    width: 76%;
    text-align: left;
    line-height: 30px;
  }
.media-list .params{
  display: inline;
  text-align: center;
  border: 1px solid #e2e2e2;
  height: 30px !important;
  border-radius: 9px;
  width: auto;
  padding: 0 5px;
  float:right;
}
.media-list span.params{
  min-width: 20%;
  display: inline-block;
  line-height: 30px;
  color:#fff;
}
  .media-list span.params.red{
    background-color: red;
  /*rgba(244, 67, 54, 0.2);*/
  }
  .list li:nth-child(2n-1){
    background-color: #fbfbfb;
  }
  .list li:nth-child(2n){
    background-color: #fff;
  }
.media-list span.params.active{
  background-color: #aaa;
  /*text-decoration:line-through;*/
}
.bg_3{
  background: -webkit-linear-gradient(left,#ffa508, #ffd052); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(left,#ffa508, #ffd052); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(left,#ffa508, #ffd052); /* Firefox 3.6 - 15 */
  background: linear-gradient(left,#ffa508, #ffd052); /* 标准的语法 */
}
.bg_4{
  background: -webkit-linear-gradient(left,#30ea9e, #7eeb6e); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(left,#30ea9e, #7eeb6e); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(left,#30ea9e, #7eeb6e); /* Firefox 3.6 - 15 */
  background: linear-gradient(left,#30ea9e, #7eeb6e); /* 标准的语法 */
}

.bg_5{
  background: -webkit-linear-gradient(left,#01a2ff, #00c5ff); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(left,#01a2ff, #00c5ff); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(left,#01a2ff, #00c5ff); /* Firefox 3.6 - 15 */
  background: linear-gradient(left,#01a2ff, #00c5ff); /* 标准的语法 */
}
.bg_1{
  background: -webkit-linear-gradient(left,#a5a0fb, #f36fc4); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(left,#a5a0fb, #f36fc4); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(left,#a5a0fb, #f36fc4); /* Firefox 3.6 - 15 */
  background: linear-gradient(left,#a5a0fb, #f36fc4); /* 标准的语法 */
}
.bg_2{
  background: -webkit-linear-gradient(left,#ff8c76, #ffae6d); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(left,#ff8c76, #ffae6d); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(left,#ff8c76, #ffae6d); /* Firefox 3.6 - 15 */
  background: linear-gradient(left,#ff8c76, #ffae6d); /* 标准的语法 */
}
</style>
