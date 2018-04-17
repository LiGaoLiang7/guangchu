<template>
  <f7-page>
    <f7-navbar>
        <f7-nav-left>
            <f7-link class="panel-open" open-panel="left" icon="fa fa-bars"></f7-link>
        </f7-nav-left>
        <div class="title">故障告警</div>
    </f7-navbar>
    <!-- <f7-block-title>参数设置</f7-block-title> -->
    <f7-list class="paramlist link-list">
      <f7-list-item link="/bmswarning/" title="BMS告警信息">
        <i class="icon iconfont icon-BMS"></i>
      </f7-list-item>
      <f7-list-item link="/syswarning/" title="系统故障状态">
        <i class="icon iconfont icon-xitongguzhangzhuangtai"></i>
      </f7-list-item>
      <f7-list-item link="/hiswarning/" title="历史告警">
        <i class="icon iconfont icon-lishigaojing"></i>
      </f7-list-item>
      <f7-list-item link="/hispower/" title="历史功率">
        <i class="icon iconfont icon-lishigongshuai"></i>
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
