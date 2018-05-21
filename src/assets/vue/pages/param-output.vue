<template>
  <f7-page>
    <f7-navbar :title="$t('app.parampage.System_output')"  :back-link="$t('app.modal.back')" href="/params/"></f7-navbar>
    <f7-list class="media-list">
      <f7-list-item v-for="(item, index) in datalist" v-if="item.isshow == 1" :key="item.paramName">
        <span>{{$t('app.params.' + item.key)}}</span>
        <span class="params">{{item.paramValue/item.resolution}}</span>
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
          { paramName : "PV1电压",              key : "PV1_VOL",      paramValue : 0, byte : 2, unit : "V"  , isshow : 1, resolution : 10  },
          { paramName : "PV1电流",              key : "PV1_CUR",      paramValue : 0, byte : 2, unit : "A"  , isshow : 0, resolution : 100 },
          { paramName : "PVI功率",              key : "PVI_PW",       paramValue : 0, byte : 2, unit : "W"  , isshow : 0, resolution : 1   },
          { paramName : "PV2电压",              key : "PV2_VOL",      paramValue : 0, byte : 2, unit : "V"  , isshow : 0, resolution : 10  },
          { paramName : "PV2电流",              key : "PV2_CUR",      paramValue : 0, byte : 2, unit : "A"  , isshow : 0, resolution : 100 },
          { paramName : "PV2功率",              key : "PV2_PW",       paramValue : 0, byte : 2, unit : "W"  , isshow : 0, resolution : 1   },
          { paramName : "系统有功功率",         key : "sys_SAP",      paramValue : 0, byte : 2, unit : "VA" , isshow : 1, resolution : 10  },
          { paramName : "系统无功功率",         key : "sys_SRP",      paramValue : 0, byte : 2, unit : "W"  , isshow : 1, resolution : 100 },
          { paramName : "系统视在功率",         key : "sys_SAPP",     paramValue : 0, byte : 2, unit : "Var", isshow : 1, resolution : 10  },
          { paramName : "电网A相电流",          key : "Grid_APC",     paramValue : 0, byte : 2, unit : "A"  , isshow : 1, resolution : 10  },
          { paramName : "电网A相电压",          key : "Grid_APV",     paramValue : 0, byte : 2, unit : "V"  , isshow : 1, resolution : 100 },
          { paramName : "电网B相电流",          key : "Grid_BPC",     paramValue : 0, byte : 2, unit : "A"  , isshow : 1, resolution : 10  },
          { paramName : "电网B相电压",          key : "Grid_BPV",     paramValue : 0, byte : 2, unit : "V"  , isshow : 1, resolution : 100 },
          { paramName : "电网C相电流",          key : "Grid_CPC",     paramValue : 0, byte : 2, unit : "A"  , isshow : 1, resolution : 10  },
          { paramName : "电网C相电压",          key : "Grid_BPV",     paramValue : 0, byte : 2, unit : "V"  , isshow : 1, resolution : 10  },
          { paramName : "逆变A相电流",          key : "Invr_APC",     paramValue : 0, byte : 2, unit : "A"  , isshow : 0, resolution : 100 },
          { paramName : "逆变A相电压",          key : "Invr_APV",     paramValue : 0, byte : 2, unit : "V"  , isshow : 0, resolution : 10  },
          { paramName : "逆变B相电流",          key : "Invr_BPC",     paramValue : 0, byte : 2, unit : "A"  , isshow : 1, resolution : 100 },
          { paramName : "逆变B相电压",          key : "Invr_CPV",     paramValue : 0, byte : 2, unit : "V"  , isshow : 1, resolution : 10  },
          { paramName : "逆变C相电流",          key : "Invr_CPC",     paramValue : 0, byte : 2, unit : "A"  , isshow : 1, resolution : 10  },
          { paramName : "逆变C相电压",          key : "Invr_BPV",     paramValue : 0, byte : 2, unit : "V"  , isshow : 1, resolution : 100 },
          { paramName : "电网AB线电压",         key : "Grid_ABLV",    paramValue : 0, byte : 2, unit : "V"  , isshow : 1, resolution : 100 },
          { paramName : "电网BC线电压",         key : "Grid_BCLV",    paramValue : 0, byte : 2, unit : "V"  , isshow : 1, resolution : 1000},
          { paramName : "电网CA线电压",         key : "Grid_CALV",    paramValue : 0, byte : 2, unit : "V"  , isshow : 1, resolution : 1   },
          { paramName : "电网频率",             key : "Grid_F",       paramValue : 0, byte : 2, unit : "Hz" , isshow : 1, resolution : 1   },
          { paramName : "功率因数",             key : "PW_FC",        paramValue : 0, byte : 2, unit :  ""  , isshow : 1, resolution : 1   },
          { paramName : "电池电流",             key : "Bty_C",        paramValue : 0, byte : 2, unit : "A"  , isshow : 0, resolution : 10  },
          { paramName : "电池电压",             key : "Bty_V",        paramValue : 0, byte : 2, unit : "V"  , isshow : 0, resolution : 10  },
          { paramName : "直流正母线电压",       key : "DC_PBUS_V",    paramValue : 0, byte : 2, unit : "V"  , isshow : 0, resolution : 10  },
          { paramName : "直流负母线电压",       key : "DC_NBUS_V",    paramValue : 0, byte : 2, unit : "V"  , isshow : 0, resolution : 10  },
          { paramName : "直流双边母线电压",     key : "DC_BBUS_V",    paramValue : 0, byte : 2, unit : "V"  , isshow : 0, resolution : 10  },
          { paramName : "直流功率",             key : "DC_PW",        paramValue : 0, byte : 2, unit : "W"  , isshow : 0, resolution : 1   },
          { paramName : "环境温度",             key : "Amb_temp",     paramValue : 0, byte : 2, unit : "℃" , isshow : 0, resolution : 100 },
          { paramName : "铅酸电池剩余容量",     key : "LL_Bry_RCAP",  paramValue : 0, byte : 2, unit : "%"  , isshow : 0, resolution : 1   },
          { paramName : "铅酸电池剩余备电时间", key : "LL_Bry_RTIME", paramValue : 0, byte : 2, unit : "Min", isshow : 0, resolution : 1   },
          { paramName : "设备类型编码",         key : "DVC_T_CODE",   paramValue : 0, byte : 2, unit : ""   , isshow : 0, resolution : 1   },
          { paramName : "软件版本号高位",       key : "Soft_V_H",     paramValue : 0, byte : 2, unit : ""   , isshow : 0, resolution : 1   },
          { paramName : "软件版本号低位",       key : "Soft_V_L",     paramValue : 0, byte : 2, unit : ""   , isshow : 0, resolution : 1   },
          { paramName : "并机地址",             key : "Para_Addr",    paramValue : 0, byte : 2, unit : ""   , isshow : 0, resolution : 1   },
          { paramName : "工作效率",             key : "Work_Effc",    paramValue : 0, byte : 2, unit : ""   , isshow : 0, resolution : 1   },
          { paramName : "充电次数",             key : "Cge_Time",     paramValue : 0, byte : 2, unit : ""   , isshow : 0, resolution : 1   },
          { paramName : "放电次数",             key : "Num_dsc",      paramValue : 0, byte : 2, unit : ""   , isshow : 0, resolution : 1   },
          { paramName : "模块A1 温度",          key : "Module_A1",    paramValue : 0, byte : 2, unit : "℃" , isshow : 0, resolution : 10  },
          { paramName : "模块B1 温度",          key : "Module_B1",    paramValue : 0, byte : 2, unit : "℃" , isshow : 0, resolution : 10  },
          { paramName : "模块C1 温度",          key : "Module_C1",    paramValue : 0, byte : 2, unit : "℃" , isshow : 0, resolution : 10  },
          { paramName : "Backup输出A相电压",    key : "Bck_O_APV",    paramValue : 0, byte : 2, unit : "V"  , isshow : 0, resolution : 10  },
          { paramName : "Backup输出B相电压",    key : "Bck_O_BPV",    paramValue : 0, byte : 2, unit : "V"  , isshow : 0, resolution : 10  },
          { paramName : "Backup输出C相电压",    key : "Bck_O_CPV",    paramValue : 0, byte : 2, unit : "V"  , isshow : 0, resolution : 10  },
          { paramName : "Backup输出频率",       key : "Bck_O_F",      paramValue : 0, byte : 2, unit : "Hz" , isshow : 0, resolution : 100 },
          { paramName : "Backup输出A相电流",    key : "Bck_O_APC",    paramValue : 0, byte : 2, unit : "A" ,  isshow : 0, resolution : 10  },
          { paramName : "Backup输出B相电流",    key : "Bck_O_BPB",    paramValue : 0, byte : 2, unit : "A" ,  isshow : 0, resolution : 10  },
          { paramName : "Backup输出C相电流",    key : "Bck_O_CPC",    paramValue : 0, byte : 2, unit : "A" ,  isshow : 0, resolution : 10  },
          { paramName : "Backup输出功率因数",   key : "Bck_O_PF",     paramValue : 0, byte : 2, unit : "" ,   isshow : 0, resolution : 1000},
          { paramName : "Backup输出有功功率",   key : "Bck_O_AP",     paramValue : 0, byte : 2, unit : "VA",  isshow : 0, resolution : 1   },
          { paramName : "Backup输出无功功率",   key : "Bck_O_RP",     paramValue : 0, byte : 2, unit : "Var", isshow : 0, resolution : 1   },
          { paramName : "Backup输出视在功率",   key : "Bck_O_APP",    paramValue : 0, byte : 2, unit : "W" ,  isshow : 0, resolution : 1   }
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

        // this.$f7.dialog.alert(JSON.stringify(this.paramsdata, " ", 4));
        if(this.paramsdata.length > 0){

          for(var i = 0; i < this.datalist.length; i++){

              if(this.datalist[i].isshow == 1){ //将要显示的赋值

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
      this.$store.commit('TAB_INDEX_CHANGE', 2);
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
    width: 66%;
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