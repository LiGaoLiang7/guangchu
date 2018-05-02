<template>
  <f7-page>
    <f7-navbar title="电池信息"  back-link="返回"  href="/params/"></f7-navbar>
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
    },
    data : function(){
      return {
        
        datalist : [
          { paramName : "电池电压",              paramValue : 0, byte : 2, unit : "V"  },
          { paramName : "电池电流",              paramValue : 0, byte : 2, unit : "A"  },
          { paramName : "温度",                  paramValue : 0, byte : 2, unit : "℃" },
          { paramName : "SOC",                   paramValue : 0, byte : 2, unit : "%"  },
          { paramName : "SOH",                   paramValue : 0, byte : 2, unit : "%"  },
          { paramName : "充放电状态",            paramValue : 0, byte : 1, unit : "", format : function(num){
              if(num == 0x11) return "充电";
              if(num == 0x22) return "放电";
              if(num == 0x33) return "待机";
              return Number(num).toString(16);
          }},
          // 0x11 充电 0x22 放电 0x33 待机
        ]
      }
    },
    computed : {
      paramsdata : function(){
        // 从store中获取参数
        // return this.$store.state.paramsbattery;
        return this.$store.getters.paramsBattery;  // 从getters中获取
      }
    },
    watch : {
      paramsdata : function(){
        // 发生变化也要设置
        this.setValueInParamList();
      }
    },

    methods : {

      // 设置数据用来显示
      setValueInParamList : function(){
        if(this.paramsdata.length == 0) return;
        
        for(var i = 0; i < this.datalist.length; i++){
          
          // 如果需要格式化解析
          if(this.datalist[i].hasOwnProperty("format")){
             this.paramsdata[i].paramValue = this.datalist[i].format(this.paramsdata[i].paramValue);
             this.paramsdata[i].format     = this.datalist[i].format;
          }
          this.datalist.splice(i, 1, this.paramsdata[i]);
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
    width: 68%;
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