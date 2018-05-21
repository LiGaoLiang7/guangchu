<template>
    <f7-page>
       <f7-navbar>
            <f7-nav-left>
                <f7-link class="panel-open" open-panel="left" icon="fa fa-bars"></f7-link>
            </f7-nav-left>
            <div class="title">{{$t('app.toolbox.home')}}</div>
        </f7-navbar>
        <f7-block class="relt systopology">
              <span class="cusbutton">{{$t('app.homepage.Working_status')}}     NA</span>
              <!-- 连线 -->
              <svg id="图层_1" data-name="图层 1" class="svg svg1 absCV" :class="{path2 : isdeviceactive[0] == 1}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150.75 144.83"><defs></defs><title>line</title><polyline class="cls-1" points="0.5 30 0.5 144.33 150.75 144.33" fill="none" :stroke="scolor(0)" stroke-miterlimit="10" stroke-width="4"/><path class="cls-1" d="M-172.25,7" transform="translate(214.83 144.33)"/></svg>
              <svg id="图层_1" data-name="图层 1" class="svg svg2 absCV" :class="{path2 : isdeviceactive[1] == 1}"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150.75 144.83"><defs></defs><title>line3</title><polyline points="150.25 0 150.25 144.33 0 144.33" fill="none" :stroke="scolor(1)" stroke-miterlimit="10" stroke-width="6"/></svg>
              <svg id="图层_1" data-name="图层 1" class="svg svg3 absCV" :class="{path2 : isdeviceactive[3] == 1}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150.75 144.83"><defs></defs><title>line</title><polyline class="cls-1" points="0.5 0 0.5 144.33 140.75 144.33" fill="none" :stroke="scolor(3)" stroke-miterlimit="10" stroke-width="4"/><path class="cls-1" d="M-172.25,7" transform="translate(214.83 114.33)"/></svg>
              <svg id="图层_1" data-name="图层 1" class="svg svg4 absCV" :class="{path2 : isdeviceactive[5] == 1}"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150.75 144.83"><defs></defs><title>line3</title><polyline points="150.25 0 150.25 144.33 0 144.33" fill="none" :stroke="scolor(5)" stroke-miterlimit="10" stroke-width="6"/></svg>
              <!-- <svg id="图层_1" data-name="图层 1" class="path svg svg5 absCV" :class="{path4 : isdeviceactive[4] == 1}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 50"><defs></defs><title>line142</title><line class="cls-1" x1="0.5" x2="0.5" y2="50" fill="none" stroke="#3b55e6" stroke-miterlimit="10" stroke-width="10"/></svg> #3b55e6 #b1b1b1 -->
              <!-- 设备图标 -->
              <div class="iconitem abs absCV iconitem1">
              <a href="/photovoltaic/" class="relt">
                <img v-if="isdeviceactive[0] == 1" src="../../images/solar@2x.png" class="imageicon pure-img" height="112" width="111" alt="">
                <img v-if="isdeviceactive[0] == 0" src="../../images/solar_gray@2x.png" class="imageicon pure-img" height="107" width="107" alt="">
                <span class="abs devicename absC">{{$t('app.homepage.Photovoltaic')}}</span>
              </a>
              </div>
              <div class="iconitem abs absCV iconitem2">
              <a href="/output/" class="relt">
                <img v-if="isdeviceactive[1] == 1" src="../../images/elect@2x.png" class="imageicon pure-img" height="112" width="111" alt="">
                <img v-if="isdeviceactive[1] == 0" src="../../images/elect_gray@2x.png" class="imageicon pure-img" height="107" width="107" alt="">
                <span class="abs devicename absC">{{$t('app.homepage.Grid')}}</span>
              </a>
              </div>
              <div class="iconitem abs absCV iconitem3">
              <a href="/params/" class="relt">
                <img v-if="isdeviceactive[2] == 1" src="../../images/yitiji@2x.png" class="imageicon pure-img" height="112" width="111" alt="" style="margin: -9px 5px 0px;">
                <img v-if="isdeviceactive[2] == 0" src="../../images/yitiji_gray@2x.png" class="imageicon pure-img" height="107" width="107" alt="" style="margin: -9px 5px 0px;">
              </a>  
              </div>
              <div class="iconitem abs absCV iconitem4">
              <a href="/battery/" class="relt">
                <img v-if="isdeviceactive[3] == 1" src="../../images/battery@2x.png" class="imageicon pure-img" height="109" width="108" alt="">
                <img v-if="isdeviceactive[3] == 0" src="../../images/battery_gray@2x.png" class="imageicon pure-img" height="107" width="107" alt="">
                <span class="abs devicename absC">{{$t('app.homepage.Battery')}}</span>
              </a>
              </div>
        <!-- <div class="iconitem abs absCV iconitem5">
                <a href="/load/">
                  <img v-if="isdeviceactive[4] == 1" src="../../images/fuzai@3x.png" class="imageicon pure-img" height="160" width="160" alt="">
                  <img v-if="isdeviceactive[4] == 0" src="../../images/fuzai_gray@3x.png" class="imageicon pure-img" height="160" width="160" alt="">
                </a>
              </div> -->
              <div class="iconitem abs absCV iconitem6">
              <a href="/load/">
                <img v-if="isdeviceactive[5] == 1" src="../../images/bavkufuzai@2x.png" class="imageicon pure-img" height="115" width="114" alt="">
                <img v-if="isdeviceactive[5] == 0" src="../../images/bavkufuzai-gray@2x.png" class="imageicon pure-img" height="107" width="107" alt="">
                <span class="abs devicename absC">{{$t('app.homepage.Load')}}</span>
              </a>
              </div>
              <!--  参数信息显示 -->
              <span class="statustext statustext1 abs absCV">NA</span>
              <span class="statustext statustext2 abs absCV">NA</span>
              <span class="statustext statustext3 abs absCV">NA</span>
              <span class="statustext statustext5 abs absCV">NA</span>
        </f7-block>
        <!-- 统计信息显示 -->
          <div class="staticitem abs absC">
            <ul>
              <li class="backicon icon1">
                <div>{{$t('app.homepage.Today_PV_generation')}} <em class="r">{{statistics.solarToday}} kWh</em></div>
                <div>{{$t('app.homepage.Total_PV_generation')}} <em class="r">{{statistics.solarTotal}} kWh</em></div>
              </li>
              <li class="backicon icon2">
                <div>{{$t('app.homepage.Today_load_consumption')}} <em class="r">{{statistics.loadToday}} kWh</em></div>
                <div>{{$t('app.homepage.Total_load_consumption')}} <em class="r">{{statistics.loadTotal}} kWh</em></div>
              </li>
              <li class="backicon icon3">
                <div>{{$t('app.homepage.Save_electricity_today')}} <em class="r">{{statistics.earningsToday}} {{$t('app.units.money')}}</em></div>
                <div>{{$t('app.homepage.Total_electricity_savings')}} <em class="r">{{statistics.earningTotal}} {{$t('app.units.money')}}</em></div>
              </li>
            </ul>
          </div>
    </f7-page>
</template>
<script>
export default {
    data (){
        return{
            // message : "000",
            statistics : {
              solarToday : 0,
              solarTotal : 0,
              loadToday : 0,
              loadTotal : 0,
              earningsToday : 0,
              earningTotal : 0,
            },
            active : "",
            // isdeviceactive 设备是否在使用中
            isdeviceactive : [1,1,1,1,0,1],
        }
    },
    methods : {
        // 变化线条颜色
        scolor : function(num){
          // isdeviceactive
          return this.isdeviceactive[num] == 1 ? "#3b55e6" :  "#b1b1b1";
        },
    },
    mounted : function(){
      this.$store.commit('TAB_INDEX_CHANGE', 1);
      
    }
    
};
</script>


<style  lang="scss" scoped>
  @import "../../sass/publicSize";
  .cusbutton{
    width: 82%;
    margin: 15px auto 0 auto;
    display: block;
    text-align: center;
    color:  $base-active-color;
  }
  .iconitem1{
      margin: -25% 0 0 -28%;
  }
  .iconitem2{
      margin: -25% 0 0 30%;
  }
  .iconitem3{
      margin: 0%;
  }
  .iconitem4{
      margin: 19% 0 0 -28%;
  }
  .iconitem5{
      margin: 19% 0 0 0%;
  }
  .iconitem6{
      margin: 19% 0 0 30%;
  }
  .systopology{
    height: calc(100% - 36%);
    margin: 2% 0px 2% 0;
    padding: 10px 15px 0 15px;
    background-color: #fff;
  }
  .iconitem{
    width: 15%;
    height: 15%;
    // border: 3px solid #a2a2a2;
    // background-color: #575757;
    border-radius: 50%;
  }
  .iconitem.active{
    background-color: $base-active-color;
  }
  .iconitem a{
    width: 100%;
    height: 100%;
    display: inline-block;
  }
  .imageicon{
    margin: 5px 0 0 0;
  }
  .staticitem{
    bottom: 1%;
    width: 100%;
  }
  .staticitem li{
    padding: 2% 10% 2% 20%;
    margin-top: -1px;
    border-top: 1px solid $base-mainborder-color; 
  }

  .backicon.icon1{
    background: #fff url(../../images/solarjuxing@2x.png) 7% 43% no-repeat;
    background-size: 38px;
  }

  .backicon.icon2{
    background: #fff url(../../images/2fuzai@2x.png) 7% 43% no-repeat;
    background-size: 38px;
  }

  .backicon.icon3{
    background: #fff url(../../images/dianfei@2x.png) 7% 43% no-repeat;
    background-size: 38px;
  }
  .svg{
    position: absolute;
  }
  .svg1{
    transform: translate(-50%,-50%) scale(0.3);
    margin: -17% 0 0 -13%;
  }
  .svg2{
    transform: translate(-50%,-50%) scale(0.3);
    margin: -13% 0 0 19%;
  }
  .svg3{
    transform: translate(-50%,-50%) scale(0.3) rotateX(180deg);
    margin: 15.5% 0px 0px -13%;
  }
  .svg4{
    margin: 11% 0 0 19%;
    transform: translate(-50%,-50%) scale(0.3) rotateX(180deg);
  }
  .svg5{
      width: 7px;
      margin-top: 15%;
      transform: translate(-50%,-50%) scale(0.3);
  }

  .statustext{
    font-size: 14px;
    color: $base-active-color;

  }
  .devicename {
    font-size: 14px;
    width: 107%;
    text-align: center;
    background-color: #fff;
    color: #000;
  }
  .statustext1{
    margin: -8% 0 0 -15%;
  }
  .statustext2{
    margin: -8% 0 0 15%;
  }
  .statustext3{
    margin: 8% 0 0 -15%;
  }
  .statustext4{
    margin: 15% 0 0 4%;
  }
  .statustext5{
    margin: 8% 0 0 15%;
  }

  @keyframes dash {
      to {
          stroke-dashoffset: 50;
      }
  }

  .path {
      stroke-dasharray: 5;
      animation: dash 5s linear infinite;
  }
  @keyframes dash2 {
      to {
          stroke-dashoffset: -50;
      }
  }

  .path2 {
      stroke-dasharray: 5;
      animation: dash2 5s linear infinite;
  }
</style>

<style>
  .list li:nth-child(2n-1){
    background-color: rgba(239, 239, 244, 0.52);
  }
  .list li:nth-child(2n){
    background-color: #fff;
  }
/*  .ios .page{
    background-color: #fff;
  }*/
</style>




