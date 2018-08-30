<template>
  <f7-page>
    <f7-navbar :title="$t('app.parampage.Battery_parameter')" :back-link="$t('app.modal.back')" href="/params/"></f7-navbar>
    <f7-list class="media-list" style="width:96%;margin: 10px auto;border-radius:10px;overflow: hidden;">
      <f7-list-item v-for="(item) in datalist" :key="item.paramName"  v-if="item.group == 1" class="bg_1">
        <span>{{$t('app.battery.' + item.key)}}</span>
        <span class="params">{{item.paramValue}}</span>
        <em class="unit">{{item.unit}}</em>
      </f7-list-item>
    </f7-list>
    <f7-list class="media-list" style="width:96%;margin: 10px auto;border-radius:10px;overflow: hidden;">
      <f7-list-item v-for="(item) in datalist" :key="item.paramName"  v-if="item.group == 2" class="bg_2">
        <span>{{$t('app.battery.' + item.key)}}</span>
        <span class="params">{{item.paramValue}}</span>
        <em class="unit">{{item.unit}}</em>
      </f7-list-item>
    </f7-list>
    <f7-list class="media-list" style="width:96%;margin: 10px auto;border-radius:10px;overflow: hidden;">
      <f7-list-item v-for="(item) in datalist" :key="item.paramName"  v-if="item.group == 3" class="bg_3">
        <span>{{$t('app.battery.' + item.key)}}</span>
        <span class="params">{{item.paramValue}}</span>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
    import { f7Navbar, f7Page, f7BlockTitle } from 'framework7-vue';
    export default {
        data : function(){
            return {
                datalist : [
                    { paramName : "电池电压",     key : "bay_vol", paramValue : 0, byte : 2, unit : "V" ,group: 1, },
                    { paramName : "电池电流",     key : "Bay_cur", paramValue : 0, byte : 2, unit : "A" ,group: 1, },
                    { paramName : "温度",         key : "temper",  paramValue : 0, byte : 2, unit : "℃",group: 1, },
                    { paramName : "SOC",          key : "SOC",     paramValue : 0, byte : 2, unit : "%",group: 2,  },
                    { paramName : "SOH",          key : "SOH",     paramValue : 0, byte : 2, unit : "%" ,group: 2, },
                    { paramName : "充放电状态",   key : "Status",  paramValue : "待机", byte : 2, unit : "",   group: 3,}
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
                    for(var j = 0; j < this.paramsdata.length; j++){
                        if(this.paramsdata[j].paramName == this.datalist[i].paramName){
                            if(this.datalist[i].paramName == "充放电状态"){
                               if(this.paramsdata[j].paramValue == "17"){
                                   this.datalist[i].paramValue = localStorage.getItem("lang") == "en" ? "Charging" : "充电";
                               }
                                if(this.paramsdata[j].paramValue == "34"){
                                    this.datalist[i].paramValue = localStorage.getItem("lang") == "en" ? "Discharge" : "放电";
                                }
                                if(this.paramsdata[j].paramValue == "51"){
                                    this.datalist[i].paramValue = localStorage.getItem("lang") == "en" ? "Standby" : "待机";
                                }
                            }else{
                                this.datalist[i].paramValue = this.paramsdata[j].paramValue;
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
    width: 68%;
    text-align: left;
  }
  .media-list .params{
    display: inline;
    text-align: center;
    border: 1px solid #e2e2e2;
    height: 30px !important;
    border-radius: 9px;
    width: auto;
    padding: 0 5px;
  }
  .media-list span.params{
    min-width: 20%;
    display: inline-block;
    line-height: 30px;
  }
  .bg_2{
    background: -webkit-linear-gradient(left,#cd81ed, #f73f85); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(left,#cd81ed, #f73f85); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(left,#cd81ed, #f73f85); /* Firefox 3.6 - 15 */
    background: linear-gradient(left,#cd81ed, #f73f85); /* 标准的语法 */
  }
  .bg_1{
    background: -webkit-linear-gradient(left,#fbbf8b, #fb9297); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(left,#fbbf8b, #fb9297); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(left,#fbbf8b, #fb9297); /* Firefox 3.6 - 15 */
    background: linear-gradient(left,#fbbf8b, #fb9297); /* 标准的语法 */
  }
  .bg_3{
    background: -webkit-linear-gradient(left,#ee4ca2, #951fb4); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(left,#ee4ca2, #951fb4); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(left,#ee4ca2, #951fb4); /* Firefox 3.6 - 15 */
    background: linear-gradient(left,#ee4ca2, #951fb4); /* 标准的语法 */
  }
</style>
