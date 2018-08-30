<template>
  <f7-page>
    <f7-navbar :title="$t('app.parampage.Photovoltaic_Input')"  :back-link="$t('app.modal.back')" href="/params/"></f7-navbar>
    <f7-list class="media-list" style="width:96%;margin: 10px auto;border-radius:10px;overflow: hidden;">
      <f7-list-item v-for="(item) in datalist" :key="item.paramName"  v-if="item.group == 1" class="bg_1">
        <span>{{$t('app.params.' + item.key)}}</span>
        <span class="params">{{item.paramValue/item.resolution}}</span>
        <em class="unit">{{item.unit}}</em>
      </f7-list-item>
    </f7-list>
    <f7-list class="media-list" style="width:96%;margin: 10px auto;border-radius:10px;overflow: hidden;">
      <f7-list-item v-for="(item) in datalist" :key="item.paramName"  v-if="item.group == 2" class="bg_2">
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
    data : function(){
      return {
        datalist : [
          { paramName : "PV1电压", key : "PV1_VOL", paramValue : 0, byte : 2, unit : "V"  , isshow : 1, resolution : 10 , group: 1},
          { paramName : "PV1电流", key : "PV1_CUR", paramValue : 0, byte : 2, unit : "A"  , isshow : 1, resolution : 10, group: 1},
          { paramName : "PV1功率", key : "PV1_PW",  paramValue : 0, byte : 2, unit : "W"  , isshow : 1, resolution : 1  , group: 1},
          { paramName : "PV2电压", key : "PV2_VOL", paramValue : 0, byte : 2, unit : "V"  , isshow : 1, resolution : 10 , group: 2},
          { paramName : "PV2电流", key : "PV2_CUR", paramValue : 0, byte : 2, unit : "A"  , isshow : 1, resolution : 10, group: 2},
          { paramName : "PV2功率", key : "PV2_PW",  paramValue : 0, byte : 2, unit : "W"  , isshow : 1, resolution : 1  , group: 2}
        ]
      }
    },
    computed : {
      paramsdata : function(){
        // 从store中获取参数
        return this.$store.getters.paramsCab;
      }
    },
    watch : {
      paramsdata : function(){
        // alert("检测到控制柜数据变化"+JSON.stringify(this.paramsdata, "-", 4));
        this.setValueInParamList();
      }
    },

    methods : {
      setValueInParamList : function(){
        if(this.paramsdata.length > 0){
          for(var i = 0; i < this.datalist.length; i++){
              for(var j = 0; j < this.paramsdata.length; j++){
                  if(this.paramsdata[j].paramName == this.datalist[i].paramName){
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
.media-list span.params{
  width: 20%;
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
</style>
