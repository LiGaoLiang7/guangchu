<template>
  <f7-page>
    <f7-navbar title="系统设置" back-link="Back"></f7-navbar>
    <div class="block block-strong">
      控制命令设置
    </div>
    <div class="block block-strong">
      工作参数设置
    </div>
  </f7-page>
</template>
<script>
  import { f7Navbar, f7Page, f7BlockTitle } from 'framework7-vue';
  export default {
    components: {
      f7Navbar,
      f7Page,
      f7BlockTitle,
    },

  };
</script>
