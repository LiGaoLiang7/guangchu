<template>
  <f7-page>
    <f7-navbar :title="$t('app.parampage.Basic_Info')" :back-link="$t('app.modal.back')"   href="/params/"></f7-navbar>
    <f7-list class="media-list" style="width:96%;margin: 10px auto;border-radius:10px;overflow: hidden;">
      <f7-list-item class="bg_2">
        <span>{{$t('app.parambasic.Soft_V')}}</span>
        <span class="params">{{datalist[0].paramValue}}{{datalist[1].paramValue}}</span>
        <em class="unit"></em>
      </f7-list-item>
      <f7-list-item class="bg_2">
        <span>{{$t('app.parambasic.Parall_addr')}}</span>
        <span class="params">{{datalist[2].paramValue}}</span>
        <em class="unit"></em>
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
          { paramName : "软件版本号高位",       paramValue : 0, byte : 2, unit : ""   , isshow : 1 },
          { paramName : "软件版本号低位",       paramValue : 0, byte : 2, unit : ""   , isshow : 1 },
          { paramName : "并机地址",            paramValue : 0, byte : 2, unit : ""   , isshow : 1 }
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
        // console.log(JSON.stringify(this.paramsdata, "-", 4)); 
        this.setValueInParamList();
      }
    },

    methods : {
      // 设置数据
      setValueInParamList : function(){
        if(this.paramsdata.length > 0){
          for(var i = 0; i < this.datalist.length; i++){
              if(this.datalist[i].isshow == 1){
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
.bg_2{
  background: -webkit-linear-gradient(left,#cd81ed, #f73f85); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(left,#cd81ed, #f73f85); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(left,#cd81ed, #f73f85); /* Firefox 3.6 - 15 */
  background: linear-gradient(left,#cd81ed, #f73f85); /* 标准的语法 */
}
</style>
