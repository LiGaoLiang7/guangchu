<template>
  <f7-page>
    <f7-navbar>
        <f7-nav-left>
            <f7-link class="panel-open" open-panel="left" icon="fa fa-bars"></f7-link>
        </f7-nav-left>
        <div class="title">参数</div>
    </f7-navbar>
    <!-- <f7-block-title>参数设置</f7-block-title> -->
    <f7-list class="media-list">
      <f7-list-item link="/photovoltaic/" link-back media="http://placehold.it/50x50" title="光伏输入">
      </f7-list-item>
      <f7-list-item link="/output/" media="http://placehold.it/50x50" title="系统输出">
      </f7-list-item>
      <f7-list-item link="/baseinfo/" media="http://placehold.it/50x50" title="基础信息">
      </f7-list-item>
      <f7-list-item link="/battery/" media="http://placehold.it/50x50" title="电池参数">
      </f7-list-item>
      <f7-list-item link="/load/" media="http://placehold.it/50x50" title="系统负载">
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
 export default {

  };
</script>
