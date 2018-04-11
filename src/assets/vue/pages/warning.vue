<template>
  <f7-page>
    <f7-navbar>
        <f7-nav-left>
            <f7-link class="panel-open" open-panel="left" icon="fa fa-bars"></f7-link>
        </f7-nav-left>
        <div class="title">故障告警</div>
    </f7-navbar>
    <!-- <f7-block-title>参数设置</f7-block-title> -->
    <f7-list class="media-list">
      <f7-list-item link="/bmswarning/" media="http://placehold.it/50x50" title="BMS告警信息">
      </f7-list-item>
      <f7-list-item link="/syswarning/" media="http://placehold.it/50x50" title="系统故障状态">
      </f7-list-item>
      <f7-list-item link="/hiswarning/" media="http://placehold.it/50x50" title="历史告警">
      </f7-list-item>
      <f7-list-item link="/hispower/" media="http://placehold.it/50x50" title="历史功率">
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
 export default {

  };
</script>
