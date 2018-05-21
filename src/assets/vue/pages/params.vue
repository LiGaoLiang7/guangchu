<template>
  <f7-page>
    <f7-navbar>
        <f7-nav-left>
            <f7-link class="panel-open" open-panel="left" icon="fa fa-bars"></f7-link>
        </f7-nav-left>
        <div class="title">{{$t('app.toolbox.param')}}</div>
    </f7-navbar>
    <!-- <f7-block-title>参数设置</f7-block-title> -->
    <f7-list class="paramlist link-list">
      <f7-list-item link="/photovoltaic/" :title="$t('app.parampage.Photovoltaic_Input')" class="parambackicon1 parambackicon">
        <!-- <i class="icon iconfont icon-guangfushuru"></i> -->
      </f7-list-item>
      <f7-list-item link="/output/" :title="$t('app.parampage.System_output')" class="parambackicon2 parambackicon">
        <!-- <i class="icon iconfont icon-xitongshuchu"></i> -->
      </f7-list-item>
      <f7-list-item link="/battery/" :title="$t('app.parampage.Battery_parameter')" class="parambackicon3 parambackicon">
        <!-- <i class="icon iconfont icon-iconset0252"></i> -->
      </f7-list-item>
      <f7-list-item link="/load/"  :title="$t('app.parampage.System_Load')" class="parambackicon4 parambackicon">
        <!-- <i class="icon iconfont icon-xitongfuzai"></i> -->
      </f7-list-item>
      <f7-list-item link="/baseinfo/" :title="$t('app.parampage.Basic_Info')" class="parambackicon5 parambackicon">
        <!-- <i class="icon iconfont icon-jichuxinxi"></i> -->
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
 export default {
  mounted : function(){
    console.log(this.$f7.views.current.router.currentRoute.path);
    this.$store.commit('TAB_INDEX_CHANGE', 2);
  }
  };
</script>
<style lang="scss">
  @import "../../sass/publicSize";
  .paramlist .item-title{
    padding-left: 45px;
    // float: right;
    // width: 87% !important;
    line-height: 38px;
    font-weight: inherit;
  }
  .paramlist i.icon{
    font-size: 29px;
    color: $base-active-color;
    color: #3b55e6;
    position: absolute;
    left: 0;
  }
  .paramlist.media-list .item-inner{
    padding: 0;
   }
   .parambackicon{
    background-size: 34px;
    background-repeat: no-repeat;
    background-position: 18px 12px;
   }
   .parambackicon1{
    background-image: url(../../images/solarjuxing@2x.png);
   }
   .parambackicon2{
    background-image: url(../../images/2systemexit@2x.png);
   }
   .parambackicon3{
    background-image: url(../../images/2battery@2x.png);
   }
   .parambackicon4{
    background-image: url(../../images/2fuzai@2x.png);
   }
   .parambackicon5{
    background-image: url(../../images/2basicmassage@2x.png);
   }


</style>
