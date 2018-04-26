<template>
    <!-- App -->
    <div id="app">
        <f7-statusbar></f7-statusbar>
        <f7-panel left cover>
            <f7-view url="/panel-left/" links-view=".view-main"/>
        </f7-panel>
        <f7-view url="/" :main="true" class="ios-edges"></f7-view>
        <f7-toolbar tabbar labels bottom class="app-main">
            <f7-link icon="iconfont icon-shouye" class="toolicon" href="/" text="首页" :class="{active : tabindex == 1}" @click="tabindex = 1"></f7-link>
            <f7-link icon="iconfont icon-canshu1" class="toolicon" href="/params/" text="参数" :class="{active : tabindex == 2}" @click="tabindex = 2"></f7-link>
            <f7-link icon="iconfont icon-gaojing " class="toolicon" href="/warning/" text="告警" :class="{active : tabindex == 3}" @click="tabindex = 3"></f7-link>
             <f7-link icon="iconfont icon-shezhi" class="toolicon" href="/setting/" text="设置" :class="{active : tabindex == 4}" @click="tabindex = 4"></f7-link>
        </f7-toolbar>
    </div>
</template>
<script>

import './assets/css/normalize.css'
import './assets/css/common.css'
import './assets/css/iconfont.css'

export default {
    mounted() {
        // console.log(this.$device);
    },
    data (){
        return{
            tabindex : 1,
        }
    },
    computed : {
      // 全局的tabIndex
      tabIndex : function(){
        return this.$store.getters.tabIndex;
      }
    },
    watch : {
      tabIndex : function(){
        this.tabindex = this.tabIndex;
      }
    }
}
</script>


<style lang="scss">
  @import "./assets/sass/publicSize";
  .page-content::-webkit-scrollbar {
    display: none;
    }
  .ios .tabbar, .ios .app-main.tabbar-labels{
    background-color: $base-mainbackground-color;
  }
  .ios .app-main.navbar{
    background-color: $base-mainbackground-color;
  }
  .md .tabbar-labels a.link {
    padding-top: 0px;
    padding-bottom: 12px;
  }
  .md .toolbar a.link i + span{
    margin-left: 0;
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
    font-size: 34px;
  }
  .ios .tabbar-labels i.icon.icon-gaojing {
    font-size: 22px;
  }
  .ios .toolbar a.link {
      line-height: 22px;
      height: 44px;
  }
  .ios .tabbar-labels a {
    color : $base-normal-color;
  }
  .md .navbar {
    height: 56px;
    background: #ffffff;
    color: #000;
    font-size: 20px;
    font-weight: 100;
  }
  .md .icon-back{
   background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'24'%20height%3D'24'%20viewBox%3D'0%200%2024%2024'%3E%3Cpath%20d%3D'M20%2011H7.83l5.59-5.59L12%204l-8%208%208%208%201.41-1.41L7.83%2013H20v-2z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E");
  }
  .md .button.button-outline {
    border: 1px solid $base-active-color;
  }
  .md .button {
    color: $base-active-color;
  }
  .md .navbar .title {
    margin: 0 !important;
    font-weight: 100;
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
      font-size: 14px;
    }
    .toolicon.active-state, 
    .toolicon.active{
      color: $base-active-color;
    }
    // 只有该界面中的视图高度是计算的
    .views, .view {
        height: calc(100% - 53px) !important;
    }
</style>
