<template>
  <f7-page>
    <f7-navbar :title="$t('app.waringpage.Historical_power')" :back-link="$t('app.modal.back')"  href="/params/"></f7-navbar>
    <f7-list class="media-list">
      <f7-list-item v-for="(item, index) in datalist" :key="item.paramName">
        <span>{{$t('app.historical.'+ item.key)}}</span>
        <input type="text" class="params" v-model="item.paramValue" disabled style="width:19% !important;">
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
        var Total_discharge_power_value = localStorage.getItem("Total_discharge_power") ? localStorage.getItem("Total_discharge_power") : 0;
        var Total_charging_power_value = localStorage.getItem("Total_charging_power") ? localStorage.getItem("Total_charging_power") : 0;
      return {
        datalist : [
          { paramName : "总放电功率",  key: "Total_discharge_power", paramValue : Total_discharge_power_value, unit : "kWh" },
          { paramName : "总充电功率",  key: "Total_charging_power", paramValue : Total_charging_power_value, unit : "kWh" },
        ]
      }
    },
    mounted : function(){
      // this.datalist =  this.params;
      this.$store.commit('TAB_INDEX_CHANGE', 3);
    },
      computed : {
          paramsdata : function(){
              console.log("History :"+JSON.stringify(this.$store.state.HistoryPowerData));
              return this.$store.state.HistoryPowerData;
          }
      },
      watch:{
          paramsdata : function(){
              this.datalist[0].paramValue = this.paramsdata[0].paramValue;
              this.datalist[1].paramValue = this.paramsdata[1].paramValue;
              // console.log("watch :"+JSON.stringify(this.datalist[0].paramValue));
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
    width: 65%;
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