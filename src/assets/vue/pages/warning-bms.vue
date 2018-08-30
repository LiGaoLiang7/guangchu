<template>
  <f7-page>
    <f7-navbar :title="$t('app.waringpage.BMS_alarm_information')" :back-link="$t('app.modal.back')" href="/warning/"></f7-navbar>
    <f7-list class="media-list" style="width:96%;margin: 10px auto;border-radius:10px;overflow: hidden;">
      <f7-list-item v-for="(item) in datalist" :key="item.paramName" v-if="item.group == 1" class="bg_1">
        <span>{{$t('app.bmswarning.' + item.key)}}</span>
        <span v-if="deactive"  class="params active"> </span>
        <span v-if="!deactive" class="params" :class="{'red' : item.paramValue == 1}">{{$t('app.modal.'+gitstatusname(item.paramValue))}}</span>
        <em class="unit">{{item.unit}}</em>
      </f7-list-item>
    </f7-list>
    <f7-list class="media-list" style="width:96%;margin: 10px auto;border-radius:10px;overflow: hidden;">
      <f7-list-item v-for="(item) in datalist" :key="item.paramName" v-if="item.group == 2" class="bg_2">
        <span>{{$t('app.bmswarning.' + item.key)}}</span>
        <span v-if="deactive"  class="params active"> </span>
        <span v-if="!deactive" class="params" :class="{'red' : item.paramValue == 1}">{{$t('app.modal.'+gitstatusname(item.paramValue))}}</span>
        <em class="unit">{{item.unit}}</em>
      </f7-list-item>
    </f7-list>
    <f7-list class="media-list" style="width:96%;margin: 10px auto;border-radius:10px;overflow: hidden;">
      <f7-list-item v-for="(item) in datalist" :key="item.paramName" v-if="item.group == 3" class="bg_3">
        <span>{{$t('app.bmswarning.' + item.key)}}</span>
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
    data : function(){
      return {
        deactive: true,
        datalist : [
          { paramName : "电池放电电流过高", key: "Bat_HCD",  paramValue : 0, unit : "", isshow : 1, group: 1},
          { paramName : "电池充电电流过高", key: "Bat_HCC",  paramValue : 0, unit : "", isshow : 1, group: 1},
          { paramName : "电池温度过低",     key: "Bat_LT",  paramValue : 0, unit : "", isshow : 1, group: 2},
          { paramName : "电池温度过高",     key: "Bat_HT",  paramValue : 0, unit : "", isshow : 1, group: 2},
          { paramName : "电池电压过低",     key: "Bat_LV",  paramValue : 0, unit : "", isshow : 1, group: 3},
          { paramName : "电池电压过高",     key: "Bat_HV",  paramValue : 0, unit : "", isshow : 1, group: 3},
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
        // alert("电池告警："+JSON.stringify(this.paramsdata, "-", 4));
        this.setValueInParamList();
        this.deactive = false;
      },
    },
    methods : {
      gitstatusname : function(num){
        return num == 1 ? "abnormal" : "normal"
      },
      setValueInParamList : function(){
        if(this.paramsdata.length > 0){
          for(var i = 0; i < this.datalist.length; i++){
              for(var j = 0; j < this.paramsdata.length; j++){
                  if(this.paramsdata[j].paramName == this.datalist[i].paramName){
                      this.datalist[i].paramValue = this.paramsdata[j].paramValue;
                      continue;
                  }
              }
          }
        }
        // 对数组重新排序
        this.datalist.sort(this.compare);
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
      this.setValueInParamList();
      this.$store.commit('TAB_INDEX_CHANGE', 3);
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
    float:left;
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
