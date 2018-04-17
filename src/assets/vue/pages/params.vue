<template>
  <f7-page>
    <f7-navbar>
        <f7-nav-left>
            <f7-link class="panel-open" open-panel="left" icon="fa fa-bars"></f7-link>
        </f7-nav-left>
        <div class="title">参数</div>
    </f7-navbar>
    <!-- <f7-block-title>参数设置</f7-block-title> -->
    <f7-list class="paramlist link-list">
      <f7-list-item link="/photovoltaic/" title="光伏输入">
        <i class="icon iconfont icon-guangfushuru"></i>
      </f7-list-item>
      <f7-list-item link="/output/" title="系统输出">
        <i class="icon iconfont icon-xitongshuchu"></i>
      </f7-list-item>
      <f7-list-item link="/battery/" title="电池参数">
        <i class="icon iconfont icon-iconset0252"></i>
      </f7-list-item>
      <f7-list-item link="/load/"  title="系统负载">
        <i class="icon iconfont icon-xitongfuzai"></i>
      </f7-list-item>
      <f7-list-item link="/baseinfo/" title="基础信息">
        <i class="icon iconfont icon-jichuxinxi"></i>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
 export default {
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

</style>
