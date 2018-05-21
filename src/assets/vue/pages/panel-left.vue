<template>
  <f7-page>
    <f7-block class="block block-strong setting">
      <div class="titlea">{{$t('app.common.connect')}}</div>
        <ul>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-after">
                  <label class="toggle toggle-init">
                    <input type="text" name="IP" placeholder="IP" v-model="ip">
                  </label>
                </div>
              </div>
            </div>
           </li>
           <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-after">
                  <label class="toggle toggle-init">
                    <input type="number" name="PORT" min="0" max="9999" v-model="port" placeholder="端口">
                  </label>
                </div>
              </div>
            </div>
           </li>
            <li>
            <div class="item-content languageswitch" style="height: 32px;">
              <div class="item-inner">
                <div class="item-title abs" style="margin-top: 3px;">{{$t('app.common.language')}}</div>
                <div class="item-after abs" style="right: 15px;">
                  <label class="toggle toggle-init" @click="switchLanguage">
                    <input type="checkbox" name="toggle" value="yes" v-model="lang"><i class="toggle-icon"></i>
                  </label>
                </div>
              </div>
            </div>
         </li>
         </ul>
      <!-- <f7-button color="green" @click='connectSocket'>{{$t('app.save')}}</f7-button> -->
    </f7-block>
    <f7-block>
      {{$t('app.common.company')}}
    </f7-block>
  </f7-page>
</template>
<script>
import Vue from 'vue';
  export default {
    data(){
      return{
        ip : "10.10.100.254",
        port : 8899,
        lang : false,
      }
    },
    methods : {
      connectSocket : function(){
        this.$store.commit('CONN_DATA_CHANGE', { ip : this.ip,  port : this.port });
      },

      switchLanguage : function(lang){
        var language = this.lang == true ? "zh-CN" : "en";
        Vue.config.lang = language;
        localStorage.setItem("lang", language);
      }
    },
    mounted : function(){
      this.lang = localStorage.getItem("lang") == "en" ? true : false;
    },

  };
</script>
<style>
  .titlea{
    font-weight: bold;
    line-height: 37px;
    font-size: 16px;
  }
  .toggle-init{
    position: relative;

  }
 .languageswitch .toggle-init::before{
    content: 'EN';
    display: block;
    top: 6px;
    left: 4px;
    position: absolute;
    color: #fff;
    z-index: 5;
  }
/*   .languageswitch .toggle-init::after{
    content: '\4E2D';
    display: block;
    top: 4px;
    left: 14px;
    position: absolute;
    top: 7px;
    left: 33px;
    color: #4cd964;
    z-index: 10;
  }*/
/*  .toggle-icon::after{
     z-index: 15;
  }*/
</style>
