<template>
    <!-- App -->
    <div id="app">
        <f7-statusbar></f7-statusbar>
        <f7-panel left cover>
            <f7-view url="/panel-left/" links-view=".view-main"/>
        </f7-panel>
        <f7-view url="/" :main="true" class="ios-edges"></f7-view>

        <f7-toolbar tabbar labels bottom class="app-main">
            <f7-link icon="iconfont icon-yongdianliang" class="toolicon" href="/" text="首页" :class="{active : tabindex == 1}" @click="tabindex = 1"></f7-link>
            <f7-link icon="iconfont icon-yongdianliang" class="toolicon" href="/about/" text="参数" :class="{active : tabindex == 2}" @click="tabindex = 2"></f7-link>
             <f7-link icon="iconfont icon-yongdianliang" class="toolicon" href="/form/" text="设置" :class="{active : tabindex == 3}" @click="tabindex = 3"></f7-link>
        </f7-toolbar>
    </div>
</template>
<script>

import './assets/css/normalize.css'
import './assets/css/common.css'
import './assets/css/iconfont.css'

export default {
    mounted() {
        console.log(this.$device)
    },
    data (){
        return{
            tabindex : 1,
        }
    },
}
</script>


<style lang="scss">
  @import "./assets/sass/publicSize";

  .ios .tabbar, .ios .app-main.tabbar-labels{
    background-color: $base-mainbackground-color;
  }
  .ios .app-main.navbar{
    background-color: $base-mainbackground-color;
  }
  .filter{
      right: 3%;
      top: 9%;
  }
  .help{
      right: 3%;
      top: calc(9% + 50px);
  }
  .overlink{
      display: block;
      width: 40px;
      height: 40px;
      border: 1px solid $base-mainborder-color;
      background-color: $secondlybackground-color !important;
    }
  .overlink span{
      font-size: 12px;
      display: block;
      line-height: 15px;
      text-align: center;
      margin-left: 0 !important;
  }
  .filter span{
    color: $base-active-color;
  }
  .filter .icon.iconfont{
    color: $base-active-color;
  }
  .overlink .icon.iconfont{
    vertical-align: top;
  }
  .ios .tabbar i.icon, .ios .tabbar-labels i.icon {
    font-size: 21px;
}
.ios .toolbar a.link {
      line-height: 23px;
      height: 44px;
  }
</style>
<style lang="scss" scoped>
  @import "./assets/sass/publicSize";
   .containter{
        width: 100%;
        height: 100%;
    }
    .amap-demo {
      height: 300px;
    }
    .toolicon{
      font-size: 16px;
    }
    .toolicon.active-state, 
    .toolicon.active{
      color: $base-active-color;
    }
    // 只有该界面中的视图高度是计算的
    .views, .view {
        height: calc(100% - 50px) !important;
    }
</style>
