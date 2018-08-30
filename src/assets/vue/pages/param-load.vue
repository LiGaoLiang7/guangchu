<template>
  <f7-page class="">
    <f7-navbar :title="$t('app.parampage.System_Load')"   :back-link="$t('app.modal.back')"  href="/params/"></f7-navbar>
    <f7-list class="media-list" style="width:96%;margin: 10px auto;border-radius:10px;overflow: hidden; ">
      <f7-list-item v-for="(item) in datalist" :key="item.paramName" v-if="item.isshow == 1 && item.group == 1" class="bg_1">
        <span>{{$t('app.params.' + item.key)}}</span>
        <span class="params">{{item.paramValue/item.resolution}}</span>
        <em class="unit">{{item.unit}}</em>
      </f7-list-item>
    </f7-list>
    <f7-list class="media-list" style="width:96%;margin: 10px auto;border-radius:10px;overflow: hidden; ">
      <f7-list-item v-for="(item) in datalist" :key="item.paramName" v-if="item.isshow == 1 && item.group == 2" class="bg_2">
        <span>{{$t('app.params.' + item.key)}}</span>
        <span class="params">{{item.paramValue/item.resolution}}</span>
        <em class="unit">{{item.unit}}</em>
      </f7-list-item>
    </f7-list>
    <f7-list class="media-list" style="width:96%;margin: 10px auto;border-radius:10px;overflow: hidden; ">
      <f7-list-item v-for="(item) in datalist" :key="item.paramName" v-if="item.isshow == 1 && item.group == 3" class="bg_3">
        <span>{{$t('app.params.' + item.key)}}</span>
        <span class="params">{{item.paramValue/item.resolution}}</span>
        <em class="unit">{{item.unit}}</em>
      </f7-list-item>
    </f7-list>
    <f7-list class="media-list" style="width:96%;margin: 10px auto;border-radius:10px;overflow: hidden; ">
      <f7-list-item v-for="(item) in datalist" :key="item.paramName" v-if="item.isshow == 1 && item.group == 4" class="bg_4">
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
      params : {
        type : Array,
        default : function(){
          return []
        }
      }
    },
    data : function(){
      return {
        datalist : [
          { paramName : "负载输出有功功率",      key : "Bck_O_AP",     paramValue : 0, byte : 2, unit : "W" ,   isshow: 1, resolution : 1, group: 1},
          { paramName : "负载输出无功功率",      key : "Bck_O_RP",     paramValue : 0, byte : 2, unit : "Var",  isshow: 1, resolution : 1, group: 1},
          { paramName : "负载输出视在功率",      key : "Bck_O_APP",    paramValue : 0, byte : 2, unit : "VA"  , isshow: 1, resolution : 1, group: 1},
          { paramName : "负载输出频率",         key : "Bck_O_F",      paramValue : 0, byte : 2, unit : "Hz" , isshow: 1, resolution : 100, group: 2 },
          { paramName : "负载输出功率因数",      key : "Bck_O_PF",     paramValue : 0, byte : 2, unit : ""   , isshow: 1, resolution : 1000, group: 2},
          { paramName : "负载输出A相电压",       key : "Bck_O_APV",    paramValue : 0, byte : 2, unit : "V"  , isshow: 1, resolution : 10, group: 3  },
          { paramName : "负载输出B相电压",       key : "Bck_O_BPV",    paramValue : 0, byte : 2, unit : "V"  , isshow: 1, resolution : 10, group: 3  },
          { paramName : "负载输出C相电压",       key : "Bck_O_CPV",    paramValue : 0, byte : 2, unit : "V"  , isshow: 1, resolution : 10, group: 3  },
          { paramName : "负载输出A相电流",       key : "Bck_O_APC",    paramValue : 0, byte : 2, unit : "A"  , isshow: 1, resolution : 10, group: 4  },
          { paramName : "负载输出B相电流",       key : "Bck_O_BPB",    paramValue : 0, byte : 2, unit : "A"  , isshow: 1, resolution : 10, group: 4  },
          { paramName : "负载输出C相电流",       key : "Bck_O_CPC",    paramValue : 0, byte : 2, unit : "A"  , isshow: 1, resolution : 10, group: 4  }
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
      setValueInParamList : function(){
        if(this.paramsdata.length > 0){
          for(var i = 0; i < this.paramsdata.length; i++){
              for(var j = 0; j < this.datalist.length; j++){
                if(this.paramsdata[i].paramName == this.datalist[j].paramName)
                  this.datalist[j].paramValue = this.paramsdata[i].paramValue;
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
.bg_4{
  background: -webkit-linear-gradient(left,#6481e7, #8251ba); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(left,#6481e7, #8251ba); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(left,#6481e7, #8251ba); /* Firefox 3.6 - 15 */
  background: linear-gradient(left,#6481e7, #8251ba); /* 标准的语法 */
}
</style>
