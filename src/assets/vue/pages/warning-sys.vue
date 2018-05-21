<template>
  <f7-page>
    <f7-navbar :title="$t('app.waringpage.System_fault_status')" :back-link="$t('app.modal.back')"  href="/params/"></f7-navbar>
    <f7-list class="media-list">
      <!-- <f7-list-item title="故障状态字1"></f7-list-item> -->
      <f7-list-item v-for="(item, index) in datalist" :key="item.paramName" v-if="item.isshow == 1 && index < 16">
        <span>{{$t('app.syswarning.'+ item.key)}}</span>
        <span class="params">{{$t('app.modal.'+gitstatusname(item.paramValue))}}</span>
        <em class="unit">{{item.unit}}</em>
      </f7-list-item>
      <!-- <f7-list-item title="故障状态字2"></f7-list-item> -->
      <f7-list-item v-for="(item, index) in datalist" :key="item.paramName" v-if="item.isshow == 1 && index > 15 && index < 32">
        <span>{{$t('app.syswarning.'+ item.key)}}</span>
        <span class="params">{{$t('app.modal.'+gitstatusname(item.paramValue))}}</span>
        <em class="unit">{{item.unit}}</em>
      </f7-list-item>
      <!-- <f7-list-item title="故障状态字3"></f7-list-item> -->
      <f7-list-item v-for="(item, index) in datalist" :key="item.paramName" v-if="item.isshow == 1 && index > 31">
        <span>{{$t('app.syswarning.'+ item.key)}}</span>
        <span class="params">{{$t('app.modal.'+gitstatusname(item.paramValue))}}</span>
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
          { paramName : "逆变器故障",                key:"Inverter_failure",                      paramValue : 0, unit : "", isshow : 1},
          { paramName : "逆变软启故障",              key:"Inverter_soft_start_failure",           paramValue : 0, unit : "", isshow : 1},
          { paramName : "逆变欠压",                  key:"Inverter_undervoltage",                 paramValue : 0, unit : "", isshow : 1},
          { paramName : "逆变过压",                  key:"Inversion_overvoltage",                 paramValue : 0, unit : "", isshow : 1},
          { paramName : "电网谐振关机",              key:"Grid_resonance_shutdown",               paramValue : 0, unit : "", isshow : 1},
          { paramName : "电网直流分量高 ",           key:"The_high_DC_component_of_the_grid",     paramValue : 0, unit : "", isshow : 1},
          { paramName : "电网频率低",                key:"Low_grid_frequency",                    paramValue : 0, unit : "", isshow : 1},
          { paramName : "电网频率高",                key:"High_frequency_grid",                   paramValue : 0, unit : "", isshow : 1},
          { paramName : "电网电压低",                key:"Low_grid_voltage",                      paramValue : 0, unit : "", isshow : 1},
          { paramName : "电网电压高",                key:"High_grid_voltage",                     paramValue : 0, unit : "", isshow : 1},
          { paramName : "电网相序异常",              key:"Abnormal_phase_sequence_of_power_grid", paramValue : 0, unit : "", isshow : 1},
          { paramName : "电网锁相失败",              key:"Grid_locking_failed",                   paramValue : 0, unit : "", isshow : 1},
          { paramName : "三相电流不平衡 ",           key:"Three_phase_current_imbalance",         paramValue : 0, unit : "", isshow : 1},
          { paramName : "交流输出短路 ",             key:"AC_output_short_circuit",               paramValue : 0, unit : "", isshow : 1},
          { paramName : "输出漏电流故障",            key:"Output_leakage_current_failure",        paramValue : 0, unit : "", isshow : 1},
          { paramName : "输出过载（离网和backup）",  key:"Output_overload",                       paramValue : 0, unit : "", isshow : 1},
          { paramName : "PV2绝缘阻抗告警",           key:"PV2_insulation_impedance_alarm",        paramValue : 0, unit : "", isshow : 1},// 故障状态字2 bit15 -bit0
          { paramName : "PV1绝缘阻抗告警",           key:"PV1_insulation_impedance_alarm",        paramValue : 0, unit : "", isshow : 1},
          { paramName : "PV2欠压",                   key:"PV2_undervoltage",                      paramValue : 0, unit : "", isshow : 1},
          { paramName : "PV2过压",                   key:"PV2_overvoltage",                       paramValue : 0, unit : "", isshow : 1},
          { paramName : "PV1欠压",                   key:"PV1_undervoltage",                      paramValue : 0, unit : "", isshow : 1},
          { paramName : "PV1过压",                   key:"PV1_overvoltage",                       paramValue : 0, unit : "", isshow : 1},
          { paramName : "PV2反接",                   key:"Reverse_PV2",                           paramValue : 0, unit : "", isshow : 1},
          { paramName : "PV1反接",                   key:"PV1_reverse_connection",                paramValue : 0, unit : "", isshow : 1},
          { paramName : "二级母线过高",              key:"Secondary_bus_is_too_high",             paramValue : 0, unit : "", isshow : 1},
          { paramName : "二级母线过低",              key:"Secondary_bus_is_too_low",              paramValue : 0, unit : "", isshow : 1},
          { paramName : "母线软件软起故障",          key:"Bus_software_soft_fault",               paramValue : 0, unit : "", isshow : 1},
          { paramName : "母线硬件软起故障",          key:"Bus_hardware_fault",                    paramValue : 0, unit : "", isshow : 1},
          { paramName : "直流母线电容上电压过压",    key:"DC_bus_capacitor_overvoltage",          paramValue : 0, unit : "", isshow : 1},
          { paramName : "直流母线电容下电压过压",    key:"DC_bus_capacitance_overvoltage",        paramValue : 0, unit : "", isshow : 1},
          { paramName : "直流母线电压不均衡",        key:"DC_bus_voltage_imbalance",              paramValue : 0, unit : "", isshow : 1},
          { paramName : "直流母线电压异常",          key:"Abnormal_DC_bus_voltage",               paramValue : 0, unit : "", isshow : 1},
          { paramName : "预留",                      key:"Reserve",                               paramValue : 0, unit : "", isshow : 1},  // 故障状态字3 bit15 -bit0
          { paramName : "产品未被授权",              key:"Product_is_not_authorized",             paramValue : 0, unit : "", isshow : 1},
          { paramName : "低穿故障",                  key:"Low_wear_failure",                      paramValue : 0, unit : "", isshow : 1},
          { paramName : "辅助电源故障",              key:"Auxiliary_power_failure",               paramValue : 0, unit : "", isshow : 1},
          { paramName : "并网过流（单相）",          key:"On_grid_over_current_single_phase",     paramValue : 0, unit : "", isshow : 1},
          { paramName : "并机主机冲突",              key:"Parallel_host_conflicts",               paramValue : 0, unit : "", isshow : 1},
          { paramName : "并机地址超限",              key:"Parallel_address_limit",                paramValue : 0, unit : "", isshow : 1},
          { paramName : "并机线故障",                key:"Parallel_line_failure",                 paramValue : 0, unit : "", isshow : 1},
          { paramName : "环境过温",                  key:"Over_temperature",                      paramValue : 0, unit : "", isshow : 1},
          { paramName : "散热器3过热",               key:"Radiator_3_overheated",                 paramValue : 0, unit : "", isshow : 1},
          { paramName : "散热器2过热",               key:"Radiator_2_overheated",                 paramValue : 0, unit : "", isshow : 1},
          { paramName : "散热器1过热",               key:"Radiator_1_overheated",                 paramValue : 0, unit : "", isshow : 1},
          { paramName : "充电器故障",                key:"Charger_failure",                       paramValue : 0, unit : "", isshow : 1},
          { paramName : "电池反接",                  key:"Reverse_battery",                       paramValue : 0, unit : "", isshow : 1},
          { paramName : "电池过压",                  key:"Battery_overvoltage",                   paramValue : 0, unit : "", isshow : 1},
          { paramName : "电池欠压（EOD）",           key:"Battery_under_voltage",                 paramValue : 0, unit : "", isshow : 1},

          // 故障状态字4 bit15 -bit0
          { paramName : "预留",                      key:"", paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",                      key:"", paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",                      key:"", paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",                      key:"", paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",                      key:"", paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",                      key:"", paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",                      key:"", paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",                      key:"", paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",                      key:"", paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",                      key:"", paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",                      key:"", paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",                      key:"", paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",                      key:"", paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",                      key:"", paramValue : 0, unit : "", isshow : 0},
          { paramName : "预留",                      key:"", paramValue : 0, unit : "", isshow : 0},
          { paramName : "总故障标志位",              key:"", paramValue : 0, unit : "", isshow : 1},
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
        return num == 1 ? "abnormal" : "normal"
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